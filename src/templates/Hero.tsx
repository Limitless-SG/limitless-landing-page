import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.talentlms.com/">Talentlms</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Enriching our learning experience\n'}
            <span className="text-primary-500">Limitless x TalentLMS</span>
          </>
        }
        description="To end powerlessness in youths caused by poverty, mental illness, & social inequality. And empower them, regardless of background, circumstance, or history to fulfill their God-given potential."
        button={
          <Link href="https://www.talentlms.com/">
            <Button xl>Upskill ourselves so we can help others</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
