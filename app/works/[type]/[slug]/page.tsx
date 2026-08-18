import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignArchive } from "../../../components/DesignArchive";
import { InternCaseStudy } from "../../../components/InternCaseStudy";
import { StandardCaseStudy } from "../../../components/StandardCaseStudy";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { internCases, standardCases } from "../../../data";

type DetailParams = Promise<{ type: string; slug: string }>;
const siteUrl = "https://chen-zhiyu-portfolio.chenzhiyuzc.chatgpt.site";

export function generateStaticParams() {
  return [
    ...Object.keys(internCases).map((slug) => ({ type: "intern", slug })),
    ...Object.entries(standardCases).map(([slug, item]) => ({ type: item.kind === "project" ? "projects" : "ai", slug })),
    { type: "design", slug: "editorial" },
    { type: "design", slug: "posters" },
  ];
}

export async function generateMetadata({ params }: { params: DetailParams }): Promise<Metadata> {
  const { type, slug } = await params;
  const intern = type === "intern" ? internCases[slug] : undefined;
  const standard = type === "projects" || type === "ai" ? standardCases[slug] : undefined;

  if (standard) {
    const images = standard.heroImage ? [{ url: `${siteUrl}${standard.heroImage}`, alt: `${standard.title} 项目界面` }] : [];
    return {
      title: standard.title,
      description: standard.summary,
      openGraph: { title: standard.title, description: standard.summary, images },
      twitter: { card: "summary_large_image", title: standard.title, description: standard.summary, images: images.map((image) => image.url) },
    };
  }

  if (intern) {
    const title = `${intern.company} · ${intern.role}`;
    return {
      title,
      description: intern.summary,
      openGraph: { title, description: intern.summary, images: [] },
      twitter: { card: "summary", title, description: intern.summary, images: [] },
    };
  }

  return {
    title: type === "design" ? "Design Archive" : "作品详情",
    description: "陈知雨的项目与设计作品详情。",
    openGraph: { title: "Design Archive", description: "陈知雨的设计作品归档。", images: [] },
    twitter: { card: "summary", title: "Design Archive", description: "陈知雨的设计作品归档。", images: [] },
  };
}

export default async function WorkDetailPage({ params }: { params: DetailParams }) {
  const { type, slug } = await params;
  const intern = type === "intern" ? internCases[slug] : undefined;
  const standard = type === "projects" || type === "ai" ? standardCases[slug] : undefined;
  const design = type === "design" && (slug === "editorial" || slug === "posters");

  if (!intern && !standard && !design) notFound();

  return (
    <main className={`layout-page work-page work-${type}`}>
      <SiteNav />
      <Link className="page-back" href="/#works">← WORKS</Link>
      {intern && <InternCaseStudy data={intern} />}
      {standard && <StandardCaseStudy data={standard} slug={slug} />}
      {design && <DesignArchive mode={slug as "editorial" | "posters"} />}
      <SiteFooter />
    </main>
  );
}
