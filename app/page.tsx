import { Card } from "../components/ui/Card";
import { Section } from "../components/ui/Section";

export default function Home() {
  return (
    <main>
      <Section className="base-layout" data-testid="base-section">
        <h1>Zoud AI Studio</h1>
        <p>A clear, consistent foundation for the sections that follow.</p>
        <Card>
          <small>Design system foundation</small>
        </Card>
        <a className="button-link" data-testid="base-target" href="mailto:hello@zoud.ae">
          Contact us
        </a>
      </Section>
    </main>
  );
}
