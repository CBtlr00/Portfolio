import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
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
        <Button onClick={() => window.location = '/files/CV.pdf'} target="_blank">Resume</Button>
      </LeftSection>
  </Section>
);

export default Hero;