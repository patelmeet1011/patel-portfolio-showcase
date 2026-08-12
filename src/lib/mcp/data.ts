// Structured portfolio content exposed through the MCP server.

export const profile = {
  name: "Meet Patel",
  title: "Data Analyst",
  location: "Boston, MA (EST)",
  summary:
    "Data analyst turning complex data into actionable insights across analytics, business intelligence, and cloud data engineering, with a focus on measurable business growth.",
  email: "patelmeet1348@gmail.com",
  github: "https://github.com/patelmeet1011",
  linkedin: "https://www.linkedin.com/in/meet-patel-7581b31b9/",
  resumeUrl: "/meetpatelResume.pdf",
  education: {
    school: "University of Massachusetts Boston",
    honors: "Magna Cum Laude, GPA 3.594/4.0",
    recognition: "Dean's List (4 semesters)",
  },
  responseTime: "Within 24 hours",
} as const;

export const projects = [
  {
    id: "marketing-insights",
    title: "Marketing Campaign Insights & Automation",
    period: "Oct 2024 - Dec 2024",
    category: "Data Analytics",
    description:
      "Automated marketing campaign performance tracking and built predictive models for campaign outcomes, replacing manual analysis.",
    technologies: ["Python", "Apache Airflow", "AWS Glue", "Tableau", "Pandas", "Scikit-learn"],
    metrics: "10% ROI enhancement",
    impact: "Increased campaign effectiveness by 25%",
    url: null,
  },
  {
    id: "excel-viz-pro",
    title: "Excel Visualization Web App (Excel Viz Pro)",
    period: "Sep 2023 - Dec 2023",
    category: "Web Development",
    description:
      "Streamlit tool that lets non-technical users get instant insights and charts from spreadsheet data.",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
    metrics: "Instant visualizations",
    impact: "Reduced analysis time by 80%",
    url: "https://patelmeet1011.github.io/ExcelVizProIt485/",
  },
  {
    id: "tableau-analysis",
    title: "Multi-Domain Data Analysis in Tableau",
    period: "Dec 2022",
    category: "Business Intelligence",
    description:
      "Analyzed and visualized retail furniture sales, the global gaming industry, and U.S. environmental emissions in Tableau.",
    technologies: ["Tableau", "SQL", "Data Blending", "Statistical Analysis"],
    metrics: "25% efficiency gain",
    impact: "Improved decision-making speed",
    url: "https://public.tableau.com/app/profile/meet.patel/vizzes",
  },
  {
    id: "us-pollution-dashboard",
    title: "US Pollution Data Dashboard (2000-2016)",
    period: "Oct 2022 - Nov 2022",
    category: "Environmental Analytics",
    description:
      "Interactive Tableau dashboard exploring air pollution trends across U.S. states over 16 years.",
    technologies: ["Tableau", "Data Cleaning", "Excel", "Geospatial Visualization", "Kaggle"],
    metrics: "16-year trend analysis",
    impact: "Revealed regional pollution patterns",
    url: "https://public.tableau.com/app/profile/meet.patel/viz/USPollutionDashboard",
  },
  {
    id: "web-scraping-unicorns",
    title: "Web Scraping & Data Storage of Unicorn Companies",
    period: "Apr 2023 - May 2023",
    category: "Data Engineering",
    description:
      "Python scraping and storage pipeline collecting real-time data on privately held startups valued over $1B.",
    technologies: ["Python", "BeautifulSoup", "SQLite", "requests", "ETL"],
    metrics: "1M+ data points",
    impact: "Automated data collection pipeline",
    url: null,
  },
  {
    id: "ubuntu-server-config",
    title: "Ubuntu 20.04 LTS Server Installation & Remote Access",
    period: "Jan 2022 - May 2022",
    category: "System Administration",
    description:
      "Installed and configured Ubuntu Server on physical and virtual machines with secure remote access.",
    technologies: ["Ubuntu Server", "Linux Administration", "SSH", "RDP", "Virtualization"],
    metrics: "Full lab setup",
    impact: "Complete server infrastructure",
    url: null,
  },
] as const;

export const skillCategories = [
  {
    category: "Programming & Languages",
    skills: ["Python", "R", "SQL", "Java", "JavaScript", "HTML/CSS", "Unix/Linux"],
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Excel (PivotTables, VBA)",
      "Google Analytics",
      "ETL",
      "Data Warehousing",
      "Data Modeling",
      "Statistical Modeling",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (Redshift, Glue)", "Azure (Synapse, Databricks)", "GCP", "Apache Airflow"],
  },
  {
    category: "Business & Process",
    skills: [
      "Agile Methodologies",
      "Jira",
      "Confluence",
      "CRM/ERP",
      "Business Process Analysis",
      "KPI Monitoring",
    ],
  },
  {
    category: "Compliance & Security",
    skills: ["HIPAA", "GDPR", "Data Security", "CompTIA CySA+", "AWS Certified"],
  },
  {
    category: "Business Intelligence",
    skills: [
      "ETL Development",
      "Data Warehousing",
      "Predictive Modeling",
      "A/B Testing",
      "Customer Segmentation",
    ],
  },
] as const;

export const experience = [
  {
    company: "Mobiquity Inc.",
    location: "Waltham, MA",
    position: "Data Analyst",
    period: "Jan 2024 - Present",
    type: "Full-time",
    description:
      "Translate complex client requirements into actionable data insights that improve digital products, marketing effectiveness, and data governance.",
    highlights: [
      "Delivered client insights with SQL, BigQuery, and Redshift",
      "Improved digital product retention by 15% through engagement analysis",
      "Optimized marketing campaigns for a 25% engagement lift",
      "Built Tableau and Power BI dashboards for real-time KPI monitoring",
      "Applied A/B testing, segmentation, and predictive modeling for 20% campaign ROI gains",
      "Built HIPAA/GDPR-compliant data workflows with Apache Airflow and AWS Glue",
    ],
    skills: ["SQL", "BigQuery", "Tableau", "Power BI", "AWS", "Python", "A/B Testing"],
  },
  {
    company: "Novus Logics",
    location: "Ahmedabad, India",
    position: "Data Analyst Intern",
    period: "Jun 2022 - Aug 2022",
    type: "Internship",
    description:
      "Optimized data processes and provided foundational analysis supporting team objectives.",
    highlights: [
      "SQL optimization initiatives yielding 60% faster queries",
      "Managed full data lifecycle with 99.5% accuracy",
      "Conducted exploratory data analysis and reporting",
      "Automated reporting for a 30% efficiency gain",
    ],
    skills: ["SQL", "Tableau", "Data Cleaning", "EDA", "Reporting"],
  },
] as const;

export const certifications = [
  { name: "AWS Certified", issuer: "Amazon Web Services", area: "Cloud & Data Engineering" },
  { name: "Google Data Analytics", issuer: "Google", area: "Analytics & Intelligence" },
  { name: "Google Analytics Certification", issuer: "Google", area: "Analytics & Intelligence" },
  { name: "Google Project Management", issuer: "Google", area: "Professional Development" },
  { name: "Database Management Training", issuer: "Professional Training Institute", area: "Database Management" },
  { name: "CompTIA CySA+ coursework", issuer: "CompTIA", area: "Compliance & Security" },
] as const;
