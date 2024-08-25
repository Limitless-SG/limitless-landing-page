import Image from 'next/image';
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
          <Link href="https://limitlesssg.talentlms.com/" target="_blank">
            TalentLMS
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-1 pb-32">
      <HeroOneButton
        title={
          <>
            {'Enriching Our Learning Journey\n'}
            <span className="text-primary-500">Limitless x TalentLMS</span>
          </>
        }
        image={
          <Image
            src="/assets/images/Limitless_Logo.png"
            alt="Limitless Logo"
            width={275} // Adjust width as needed
            height={275} // Adjust height as needed
          />
        }
        description="Equip yourself with the skills and knowledge to empower youths overcoming challenges like poverty, mental illness, and social inequality"
        button={
          <Link href="https://limitlesssg.talentlms.com/" target="_blank">
            <Button xl>Start Your Training Now!</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
