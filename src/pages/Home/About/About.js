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

                <P>👋 Hello!</P>

                <P mt={'1rem'}>
                    I’m Mikel — a Software Engineer specializing in{' '}
                    <span> React, TypeScript, C#, and .NET </span>, building
                    full-stack web and desktop applications.
                </P>

                <P mt={'2rem'}>
                    My work focuses on{' '}
                    <span> internal platforms and enterprise tooling </span>,
                    where reliability, flexibility, and maintainability matter
                    as much as features. I enjoy designing systems that simplify
                    complex workflows and help teams operate more efficiently.
                </P>

                <P mt={'2rem'}>
                    At TÜV SÜD, I develop engineering platforms used by globally
                    distributed teams. One example is
                    <span> SMARTS ReportBuilder </span>, an offline-capable
                    reporting system with a template-driven architecture that
                    allows report structures and forms to evolve without
                    requiring application updates.
                </P>

                <P mt={'2rem'}>
                    I have also contributed to an
                    <span> AI-assisted internal chatbot </span>
                    built with Azure and OpenAI, which converts natural language
                    questions into SQL queries executed through secure .NET APIs
                    against on-premise enterprise databases.
                </P>

                <P mt={'2rem'}>
                    I’m particularly interested in systems that combine{' '}
                    <span>
                        modern frontend technologies with strong backend
                        architecture
                    </span>{' '}
                    — whether that means building dynamic reporting engines,
                    modernizing deployment workflows, or integrating AI-powered
                    tools with enterprise data systems.
                </P>
            </SectionInner>
        </AboutSection>
    )
}

export default About
