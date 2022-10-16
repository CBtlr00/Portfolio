import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
          <BlogCard>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES}/images/1.png`} />
            <TitleContent>
              <HeaderThree title>Portfolio</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">Using React, Node.js & MongoDB I created a personal portfolio. It is a clean, functional, and responsive web application. The aim of this project was to provide a website to display information about myself while also developing my JavaScript skills and learning React.</CardInfo>
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

          <BlogCard>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES}/images/2.png`} />
            <TitleContent>
              <HeaderThree title>E-Commerce</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">Using Django and Python I built an E-Commerce Store. I learnt how to build a Full Stack Django Application - from start to finish. It is a simple e-commerce store app that allows users to buy item and create accounts to shop online.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                <Tag>Django</Tag>
                <Tag>Python</Tag>
                <Tag>HTML</Tag>
                <Tag>TailWind</Tag>
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href="https://github.com/CBtlr00/eCommerce-Store" target="_blank">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>

          <BlogCard>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES}/images/3.png`} />
            <TitleContent>
              <HeaderThree title>Movie API</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">Using vanilla JavaScript and OMDB API I created a Movie API. Whilst doing this I learnt more on server-side and client-side in web application.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                <Tag>JavaScript</Tag>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href="https://github.com/CBtlr00/MovieAPI" target="_blank">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
    </GridContainer>
  </Section>
);

export default Projects;