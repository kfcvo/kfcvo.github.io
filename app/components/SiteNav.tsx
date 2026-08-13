import Link from "next/link";

export function SiteNav() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="陈知雨个人作品集首页">
        <span>CZY</span>
        <small>PORTFOLIO · 2026</small>
      </Link>
      <nav className="site-nav" aria-label="主导航">
        <Link href="/#practice">作品分类</Link>
        <Link href="/works/intern">实习经历</Link>
        <Link href="/about">关于我</Link>
      </nav>
      <a className="header-contact" href="mailto:is_chenzhiyu@163.com">LET&apos;S TALK ↗</a>
    </header>
  );
}
