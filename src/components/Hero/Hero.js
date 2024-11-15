import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle maincenter>
          Hi,<br/>
          My name is Cian Butler<br/>
          and welcome to my Portfolio
        </SectionTitle>
        <SectionText>
        I am a dedicated Full-Stack Developer with a strong specialization in backend development, bringing a solid foundation in Computer Science from Technological University Dublin. I have a passion for programming and I enjoy keeping up with the newest technologies.
        </SectionText>
      </LeftSection>
  </Section>
);

export default Hero;