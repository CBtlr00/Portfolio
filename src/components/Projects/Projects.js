import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES}/images/1.png`} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target="_blank">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}

          <BlogCard key={i}>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES}/images/1.png`} />
            <TitleContent>
              <HeaderThree title></HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">Using React, Node.js & MongoDB I created a portfolio. It is a clean, functional, and responsive web application. The aim of this project was to provide a website to display information about myself while also teaching myself more about React and JavaScript.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                <Tag>MongoDB</Tag>
                <Tag>React</Tag>
                <Tag>Node</Tag>
                <Tag>Next</Tag>
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href="https://github.com/CBtlr00/Portfolio" target="_blank">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
    </GridContainer>
  </Section>
);

export default Projects;