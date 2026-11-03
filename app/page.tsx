import { Hero } from "../components/sections/Hero";
import { siteContent } from "../lib/content";

export default function Home() {
  return (
    <main>
      <Hero content={siteContent.hero} ctaHref={siteContent.studio.mailtoHref} />
    </main>
  );
}
