import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="View and enroll in your assigned learnings."
      subtitle="Start your learning now!"
      button={
        <Link href="https://limitlesssg.talentlms.com/" target="_blank">
          <Button>Log in</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
