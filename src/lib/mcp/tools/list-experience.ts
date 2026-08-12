import { defineTool } from "@lovable.dev/mcp-js";
import { experience } from "../data";

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List Meet Patel's professional work experience with roles, dates, responsibilities, and measurable achievements.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
