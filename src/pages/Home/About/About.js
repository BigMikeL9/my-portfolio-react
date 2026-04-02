import React from 'react'

import { AboutSection } from './About.style'
import { SectionInner } from '../../../layout/Section/Section.style'
import { H2, P } from '../../../styles/Typography.style'
import Divider from '../../../components/UI/Divider/Divider'

const About = () => {
    return (
        <AboutSection id="about">
            <SectionInner>
                <H2>About Me</H2>
                <Divider />

                <P>👋 I'm Mikel — a software engineer specializing in <span> React, TypeScript, C#, and .NET. </span></P>

                <P mt={'1rem'}>
                    I spend most of my time building platforms and enterprise tooling at TÜV SÜD, where my work reaches 3,000+ engineers across 12+ countries. The problems I find most interesting aren't the flashy ones — they're the ones where the constraints are real: systems that have to work offline, forms that need to evolve without redeployment, data that can't leave the building.
                </P>

                <P mt={'2rem'}>
                    Some of what I've built:
                </P>

                <P mt={'2rem'}
                   pl={'4rem'}>
                   ▸ <span>SMARTS ReportBuilder</span> — an offline-capable desktop reporting platform with an embedded local database and a template-driven architecture. Engineers can generate and manage inspection reports with no internet connection, and report structures can change without touching the application code.
                </P>

                <P mt={'2rem'}
                   pl={'4rem'}>
                   ▸ An <span>AI-assisted internal chatbot</span> (Azure + OpenAI) that converts plain English questions into SQL queries, executed through secure .NET APIs against on-premise enterprise databases — making operational data accessible to engineers who'd never write a query themselves.
                </P>

                <P mt={'2rem'}>
                    Before I was a software engineer, I was a civil engineer. I've been the person stuck using clunky internal tools, and that shapes how I think about every interface I build.
                </P>
               
                <P mt={'2rem'}>
                    If you want to talk shop, I'm always up for it — reach me at <span>mikel.kamel.wark@gmail.com</span>.
                </P>
            </SectionInner>
        </AboutSection>
    )
}

export default About
