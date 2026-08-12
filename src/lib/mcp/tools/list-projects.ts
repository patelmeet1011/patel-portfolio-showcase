import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List portfolio projects with descriptions, technologies, impact metrics, and links. Optionally filter by a keyword or technology.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional keyword to filter projects by title, category, description, or technology."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const results = q
      ? projects.filter((p) =>
          [p.title, p.category, p.description, ...p.technologies]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : [...projects];
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { count: results.length, projects: results },
    };
  },
});
