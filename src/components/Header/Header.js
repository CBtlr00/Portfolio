import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFileText, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "20px" }}>
          <DiCssdeck size="3rem"/> <Span>Cian Butler</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/CBtlr00' target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://ie.linkedin.com/in/cian-butler-2284921a1' target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href={`${process.env.NEXT_PUBLIC_IMAGES}/files/CV.pdf`} target="_blank">
        <AiFillFileText size="3rem"/>
      </SocialIcons>
      <SocialIcons href='mailto:cianbtlr3@gmail.com' target="_blank">
        <AiFillMail size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
