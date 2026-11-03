import type { HeroContent } from "../../lib/content-types";
import { ButtonLink } from "../ui/ButtonLink";
import { Section } from "../ui/Section";

import styles from "./Hero.module.css";

type HeroProps = Readonly<{
  content: HeroContent;
  ctaHref: string;
}>;

export function Hero({ content, ctaHref }: HeroProps) {
  return (
    <Section aria-labelledby="hero-heading" className={styles.hero} data-testid="hero">
      <div className={styles.content}>
        <h1 className={styles.headline} id="hero-heading">
          {content.headline}
        </h1>
        <p className={styles.pitch}>{content.pitch}</p>
        <ButtonLink className={styles.cta} href={ctaHref}>
          {content.ctaLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
