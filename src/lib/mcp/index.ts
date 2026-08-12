import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProjectsTool from "./tools/list-projects";
import listSkillsTool from "./tools/list-skills";
import listExperienceTool from "./tools/list-experience";
import listCertificationsTool from "./tools/list-certifications";
import getContactTool from "./tools/get-contact";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "patel-portfolio-showcase",
  title: "patel-portfolio-showcase",
  version: "0.1.0",
  instructions:
    "Tools for Meet Patel's portfolio. Use `get_profile` for a professional overview, `list_projects` to browse or search projects, `list_skills` for technical skills by category, `list_experience` for work history, `list_certifications` for credentials, and `get_contact` for contact details and links.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    getProfileTool,
    listProjectsTool,
    listSkillsTool,
    listExperienceTool,
    listCertificationsTool,
    getContactTool,
  ],
});
