const works = {
  editorial: {
    title: "Wechat Editorial",
    subtitle: "公众号编辑设计",
    description: "在有限版式里整理信息层级、阅读节奏与品牌语气，让长内容依然轻盈、好读。",
  },
  posters: {
    title: "Posters & Materials",
    subtitle: "海报与视觉物料",
    description: "围绕活动主题建立色彩、字体与图形秩序，并将同一视觉系统延展到不同触点。",
  },
};

export function DesignArchive({ mode }: { mode: "editorial" | "posters" }) {
  const work = works[mode];
  return (
    <article className={`design-archive design-${mode}`}>
      <header>
        <p className="eyebrow">VISUAL PRACTICE / 2022—2025</p>
        <h1>{work.title}</h1>
        <div><p>{work.subtitle}</p><p>{work.description}</p></div>
      </header>
      <section className="design-gallery" aria-label={`${work.title} 作品陈列`}>
        <div className="design-piece piece-one"><span>01</span><div className="poster-flower"><i /><i /><i /><i /><b>IDEAS<br />IN BLOOM</b></div></div>
        <div className="design-piece piece-two"><span>02</span><div className="poster-type"><small>EDITORIAL NOTE</small><b>把内容的<br />呼吸感<br />还给读者。</b><i>2026 / 04</i></div></div>
        <div className="design-piece piece-three"><span>03</span><div className="poster-grid"><i /><i /><i /><i /><i /><i /><b>ORDER<br />× PLAY</b></div></div>
        <div className="design-piece piece-four"><span>04</span><div className="poster-wave"><i /><b>VISUAL<br />RHYTHM</b><small>FORM FOLLOWS FEELING</small></div></div>
      </section>
      <p className="archive-note">A SMALL ARCHIVE OF LAYOUT, COLOR AND VISUAL RHYTHM.</p>
    </article>
  );
}
