import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Meet Patel's professional profile: name, title, location, summary, education highlights, and public links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
