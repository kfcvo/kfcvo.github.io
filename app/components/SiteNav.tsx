import Link from "next/link";

export function SiteNav() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="陈知雨个人作品集首页">
        <span>Zhirain</span>
        <small>PORTFOLIO · 2026</small>
      </Link>
      <nav className="site-nav" aria-label="主导航">
        <Link href="/"><span>HOME</span><small>主页</small></Link>
        <Link href="/#practice"><span>WORKS</span><small>作品集</small></Link>
        <Link href="/about"><span>ABOUT ME</span><small>关于我</small></Link>
      </nav>
    </header>
  );
}
