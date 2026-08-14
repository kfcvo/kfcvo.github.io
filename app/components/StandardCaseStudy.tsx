import { type StandardCase } from "../data";

function CaseHeroVisual({ data }: { data: StandardCase }) {
  return (
    <div className={`case-hero-visual case-hero-${data.kind}`} aria-hidden="true">
      <div className="case-window">
        <div className="case-window-top"><i /><i /><i /><span>{data.eyebrow}</span></div>
        {data.kind === "project" ? (
          <div className="mood-dashboard">
            <div className="mood-greeting"><small>GOOD EVENING</small><strong>How are you, really?</strong><p>Take a quiet moment for yourself.</p></div>
            <div className="mood-pulse"><i>☺</i><span>CALM</span></div>
            <div className="mood-calendar"><b>M</b><b>T</b><b className="selected">W</b><b>T</b><b>F</b><b>S</b><b>S</b></div>
          </div>
        ) : (
          <div className="ai-dashboard">
            <div className="ai-command"><span>ASK / BUILD / EXPLORE</span><strong>{data.title}</strong></div>
            <div className="ai-signal"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="ai-output"><span>PROTOTYPE NOTE</span><p>{data.summary}</p></div>
          </div>
        )}
      </div>
      <p>PRODUCT SYSTEM / INTERACTION STUDY</p>
    </div>
  );
}

export function StandardCaseStudy({ data }: { data: StandardCase; slug: string }) {
  return (
    <article className="case-study">
      <header className="case-hero">
        <div className="case-title">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className="case-summary">{data.summary}</p>
          <div className="case-tags">{data.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <CaseHeroVisual data={data} />
      </header>

      <section className="case-overview">
        <div className="overview-meta">
          {data.metadata.map(([label, value]) => (
            <div key={label}><span>{label}</span><p>{value}</p></div>
          ))}
        </div>
        <div className="overview-role">
          <p className="eyebrow">MY CONTRIBUTION</p>
          <h2>{data.contribution}</h2>
        </div>
      </section>

      <section className="case-chapters" aria-label="项目过程">
        {data.sections.map((section, index) => (
          <article key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{section.title.replace(/^\d+ \/ /, "")}</h2><p>{section.body}</p></div>
          </article>
        ))}
      </section>

      <footer className="case-closing">
        <p className="eyebrow">END OF CASE</p>
        <h2>清晰不是减少复杂度，<br />而是让复杂度可被理解。</h2>
      </footer>
    </article>
  );
}
