import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?next=" + encodeURIComponent(next);
        return;
      }
      setEmail(sess.session.user.email ?? null);
      const { data, error: detailsError } = await oauth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (detailsError) {
        setError(detailsError.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  const decide = async (approve: boolean) => {
    setBusy(true);
    const { data, error: decisionError } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (decisionError) {
      setBusy(false);
      setError(decisionError.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-16">
      <Card className="w-full max-w-md p-8 space-y-6">
        {error ? (
          <>
            <h1 className="text-2xl font-bold text-foreground">Authorization failed</h1>
            <p className="text-muted-foreground">{error}</p>
          </>
        ) : !details ? (
          <p className="text-muted-foreground">Loading authorization request…</p>
        ) : (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Connect {details.client?.name ?? "an app"} to patel-portfolio-showcase
              </h1>
              <p className="text-muted-foreground">
                {details.client?.name ?? "This client"} will be able to call this app's enabled tools
                while you are signed in.
              </p>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              {email && <p>Signed in as {email}</p>}
              {details.client?.redirect_uri && <p>Redirects to {details.client.redirect_uri}</p>}
              {details.scope && <p>Requested access: {details.scope}</p>}
              <p>This does not bypass this app's permissions or backend policies.</p>
            </div>
            <div className="flex gap-3">
              <Button disabled={busy} onClick={() => decide(true)} className="flex-1">
                Approve
              </Button>
              <Button
                disabled={busy}
                variant="outline"
                onClick={() => decide(false)}
                className="flex-1"
              >
                Cancel connection
              </Button>
            </div>
          </>
        )}
      </Card>
    </main>
  );
};

export default OAuthConsent;
