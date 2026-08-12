import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../data";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Get public contact details and links for Meet Patel: email, location, typical response time, GitHub, LinkedIn, and resume.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      email: profile.email,
      location: profile.location,
      responseTime: profile.responseTime,
      github: profile.github,
      linkedin: profile.linkedin,
      resumeUrl: profile.resumeUrl,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: { contact },
    };
  },
});
