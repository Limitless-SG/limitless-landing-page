import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="We keep up to date with our learnings"
    description="By tracking everyone's learnings, we can ensure we are always up to date with the latest regualtions and are able to provide the best help."
  >
    <VerticalFeatureRow
      title="Learning is a continuous cycle"
      description="We enforce certain re-certifications, and update them as rules and regulations change."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Incentives with badges and certificates"
      description="With optional and mandated learnings, incentivise yourself to recieve badges and certificates."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Track everyone's progress and remind one another"
      description="Send reminders to those enrolledf to learn, and view their progress and pacing."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
