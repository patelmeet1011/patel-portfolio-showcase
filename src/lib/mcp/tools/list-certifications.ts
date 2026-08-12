import { defineTool } from "@lovable.dev/mcp-js";
import { certifications } from "../data";

export default defineTool({
  name: "list_certifications",
  title: "List certifications",
  description: "List Meet Patel's professional certifications and their issuers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(certifications, null, 2) }],
    structuredContent: { certifications },
  }),
});
