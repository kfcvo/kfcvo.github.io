import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "./components/SiteNav";

const collageImages = [
  { src: "/home/home-texture-01.png", alt: "灰绿色抽象绘画", className: "collage-one" },
  { src: "/home/home-texture-02.png", alt: "淡蓝色花卉绘画", className: "collage-two" },
  { src: "/home/home-texture-03.png", alt: "蓝紫色花朵绘画", className: "collage-three" },
  { src: "/home/home-texture-04.png", alt: "树影与花朵绘画", className: "collage-four" },
  { src: "/home/home-texture-05.png", alt: "灰绿色百合绘画", className: "collage-five" },
  { src: "/home/home-texture-06.png", alt: "灰蓝色写意花卉", className: "collage-six" },
  { src: "/home/home-texture-07.png", alt: "淡紫色花蕊绘画", className: "collage-seven" },
  { src: "/home/home-texture-08.png", alt: "蓝灰色抽象纹理", className: "collage-eight" },
];

const practices = [
  {
    number: "01",
    title: "Intern",
    subtitle: "产品策略与体验设计",
    text: "从真实问题出发，完成研究、定义、优先级判断与交付闭环。",
    href: "/works/intern",
    tone: "mint",
  },
  {
    number: "02",
    title: "Project",
    subtitle: "复杂系统与技术理解",
    text: "在 AI、区块链与业务目标之间，建立团队都能理解的产品语言。",
    href: "/works/projects",
    tone: "sky",
  },
  {
    number: "03",
    title: "AI Exploration",
    subtitle: "AI 原型与快速验证",
    text: "把日常观察做成轻量工具，用原型尽早验证价值与体验。",
    href: "/works/ai",
    tone: "lime",
  },
];

export default function Home() {
  return (
    <main className="home-page home-compact" id="top">
      <SiteNav />

      <section className="collage-hero" aria-label="陈知雨个人作品集主视觉">
        <div className="collage-scene">
          <p className="collage-kicker">PRODUCT · AI · EXPERIENCE</p>
          <p className="collage-edition">PORTFOLIO / 2026<br />SINGAPORE — BEIJING</p>

          {collageImages.map((image, index) => (
            <figure className={`collage-piece ${image.className}`} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 45vw, 28vw"
                priority={index < 4}
                unoptimized
              />
            </figure>
          ))}

          <div className="collage-note" aria-label="我的设计方法">
            <small>MY APPROACH</small>
            <p>Observe deeply.<br />Frame clearly.<br />Build thoughtfully.</p>
          </div>
          <span className="collage-sound" aria-hidden="true">♪</span>
          <Link className="collage-signature" href="#practice">My Portfolio <span>↘</span></Link>
        </div>
      </section>

      <section className="practice-section" id="practice" aria-label="作品分类">
        <div className="section-heading section-heading-minimal">
          <p className="eyebrow">WORK ARCHIVE</p>
        </div>
        <div className="folder-grid">
          {practices.map((practice) => (
            <Link className={`folder-card folder-${practice.tone}`} href={practice.href} key={practice.number}>
              <div className="folder-sheet">
                <small>{practice.subtitle}</small>
                <p>{practice.text}</p>
              </div>
              <div className="folder-front">
                <span>{practice.number}</span>
                <h2>{practice.title}</h2>
                <i>↗</i>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
