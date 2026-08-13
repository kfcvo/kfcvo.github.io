import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">OPEN TO PRODUCT & AI OPPORTUNITIES</p>
      </div>
      <div className="footer-links">
        <a href="mailto:is_chenzhiyu@163.com">is_chenzhiyu@163.com ↗</a>
        <Link href="/about">About me</Link>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="footer-note">© 2026 CHEN ZHIYU · DESIGNED WITH CARE</p>
    </footer>
  );
}
