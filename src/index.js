export const project = {
  slug: "workflow-database-engine",
  title: "Workflow Database Engine",
  description: "Database infrastructure for approval, rejection, and stage workflows.",
  features: [
  "Workflow tables",
  "Stage transitions",
  "Approval history",
  "Stored procedures",
  "Reporting views",
  "Seed data"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
