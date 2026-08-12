import { defineTool } from "@lovable.dev/mcp-js";
import { skillCategories } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "List Meet Patel's technical skills grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(skillCategories, null, 2) }],
    structuredContent: { categories: skillCategories },
  }),
});
