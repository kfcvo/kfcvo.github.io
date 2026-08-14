"use client";

import { useState } from "react";
import type { InternCase } from "../data";

const starLabels = [
  ["S", "Situation", "situation"],
  ["T", "Task", "task"],
  ["A", "Action", "action"],
  ["R", "Result", "result"],
] as const;

export function InternCaseStudy({ data }: { data: InternCase }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = data.works[activeIndex];

  return (
    <article className="intern-case">
      <header className="intern-hero">
        <div>
          <p className="eyebrow">{data.sector}</p>
          <h1>{data.company}</h1>
          <p>{data.summary}</p>
        </div>
        <dl>
          <div><dt>ROLE</dt><dd>{data.role}</dd></div>
          <div><dt>PERIOD</dt><dd>{data.period}</dd></div>
          <div><dt>CASES</dt><dd>{String(data.works.length).padStart(2, "0")}</dd></div>
        </dl>
      </header>

      <nav className="case-tabs" aria-label="选择项目子案例">
        {data.works.map((work, index) => (
          <button key={work.number} className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)} aria-pressed={index === activeIndex}>
            <span>{work.number}</span>{work.title}
          </button>
        ))}
      </nav>

      <section className="intern-feature" key={active.number}>
        <div className="intern-art" aria-hidden="true">
          <div className="art-toolbar"><span>{active.visual}</span><b>CASE {active.number}</b></div>
          <div className="art-canvas">
            <div className="art-map">
              <i /><i /><i /><i />
              <span className="map-line line-a" /><span className="map-line line-b" /><span className="map-line line-c" />
            </div>
            <div className="art-metric"><small>IMPACT SIGNAL</small><strong>{active.tags[0]}</strong><span>verified product decision</span></div>
            <div className="art-evidence"><small>OUTCOME</small><p>{active.outcome}</p></div>
          </div>
        </div>

        <div className="intern-story">
          <p className="eyebrow">CASE {active.number} / {active.tags.join(" · ")}</p>
          <h2>{active.title}</h2>
          <p className="story-outcome">{active.outcome}</p>
          <div className="star-list">
            {starLabels.map(([letter, label, key], index) => (
              <details key={key} open={index === 0}>
                <summary><b>{letter}</b><span>{label}</span><i>＋</i></summary>
                <p>{active.star[key]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
