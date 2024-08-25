import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="We keep up to date with our learnings"
    description="By tracking everyone's learnings, we can ensure we are always up to date with the latest regualtions and are able to provide the best help."
  >
    <VerticalFeatureRow
      title="Continuous Learning for Continuous Impact"
      description="We ensure our volunteers are always equipped with the latest skills and knowledge by updating courses as regulations and needs evolve."
      image="/assets/images/undraw_online_learning.svg"
      imageAlt="Continuous Learning for Continuous Impact"
    />
    <VerticalFeatureRow
      title="Recognizing Your Achievements"
      description="Earn badges and certificates as you progress, celebrating your dedication and expertise in advancing our mission."
      image="/assets/images/undraw_certificate.svg"
      imageAlt="Recognizing Your Achievements"
      reverse
    />
    <VerticalFeatureRow
      title="Supporting Each Other's Growth"
      description="Track progress and encourage your fellow volunteers to stay on course, fostering a community of continuous learning and mutual support."
      image="/assets/images/undraw_showing_support.svg"
      imageAlt="Supporting Each Other's Growth"
    />
  </Section>
);

export { VerticalFeatures };
