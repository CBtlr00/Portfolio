import React from 'react';
import { AiFillGithub, AiFillFileText, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:cianbtlr3@gmail.com'>cianbtlr3@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"We live and breathe software development"</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/CBtlr00' target="_blank">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/cian-butler-2284921a1/' target="_blank">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href={`${process.env.NEXT_PUBLIC_IMAGES}/files/CV.pdf`} target="_blank">
            <AiFillFileText size="3rem"/>
          </SocialIcons>
          <SocialIcons href='mailto:cianbtlr3@gmail.com' target="_blank">
            <AiFillMail size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
