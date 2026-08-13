import Link from "next/link";
import { notFound } from "next/navigation";
import { DesignArchive } from "../../../components/DesignArchive";
import { InternCaseStudy } from "../../../components/InternCaseStudy";
import { StandardCaseStudy } from "../../../components/StandardCaseStudy";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { internCases, standardCases } from "../../../data";

type DetailParams = Promise<{ type: string; slug: string }>;

export function generateStaticParams() {
  return [
    ...Object.keys(internCases).map((slug) => ({ type: "intern", slug })),
    ...Object.entries(standardCases).map(([slug, item]) => ({ type: item.kind === "project" ? "projects" : "ai", slug })),
    { type: "design", slug: "editorial" },
    { type: "design", slug: "posters" },
  ];
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
