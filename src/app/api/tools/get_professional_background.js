import { Client } from "@notionhq/client";

export default function handler(req, res) {
  res.status(200).json({
    job_title: "Software Engineering Intern - Teamcenter Visualization",
    company: "Siemens",
    why: "Valued because it blends technical challenge with end-user impact.",
    recent_project: "Built an agent-powered daily briefing app.",
  });
}