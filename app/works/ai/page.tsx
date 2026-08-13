import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { standardCases } from "../../data";

export default function AiWorksPage() {
  const projects = Object.entries(standardCases).filter(([, item]) => item.kind === "ai");
  return (
    <main className="work-index-page" id="top">
      <SiteNav />
      <section className="ai-index-section" aria-labelledby="ai-heading">
        <header>
          <p className="eyebrow">WORK ARCHIVE / 03</p>
          <h1 id="ai-heading">AI Exploration</h1>
          <p>从日常问题出发，用轻量原型探索 AI 的真实使用价值。</p>
        </header>
        <div className="ai-index-grid">
          {projects.map(([slug, project], index) => (
            <Link href={`/works/ai/${slug}`} key={slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{project.status}</small>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <b>VIEW CASE ↗</b>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
