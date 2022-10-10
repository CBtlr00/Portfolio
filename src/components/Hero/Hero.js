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
          I am Computer Science Student at Technological University Dublin. I have a passion for programming and I enjoy learning about new technologies.
        </SectionText>
      </LeftSection>
  </Section>
);

export default Hero;