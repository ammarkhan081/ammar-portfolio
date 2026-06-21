import Link from "next/link";
import type { Project } from "@/lib/content";
import { Corner, ArrowRight } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="card">
      <div className="card-cover" style={{ background: project.gradient }}>
        <span className="glow" />
        {project.inProgress && (
          <span className="progress-badge">In Progress</span>
        )}
        <div>
          <h3>{project.title}</h3>
          <span className="cover-sub">{project.category}</span>
        </div>
      </div>
      <div className="card-foot">
        <span className="corner"><Corner /></span>
        <div>
          <div className="label">{project.title}</div>
          <div className="desc">{project.summary}</div>
        </div>
        <span className="card-arrow"><ArrowRight /></span>
      </div>
    </Link>
  );
}
