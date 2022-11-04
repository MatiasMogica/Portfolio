import React from 'react'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'
import { FaNode } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import CV from '../../images/Curriculum.png'
import "./index.css"

export default function About() {
    return (
        <section id='about'>
        <div className='aboutContainer'>
            <h2 className='there'>Hi there!</h2>
            <div className='myDescription'>
            <p>I'm a Fullstack Web Developer

                But apart from programming, I really like playing soccer, spending time with friends or family, and cooking (I also have a degree in gastronomy and haute cuisine).

                I consider myself an independent person,
                sociable, hard-working and respectful.

                I like to participate in group projects with people who add value, pleasant experiences, and who help me in my continuous learning process in this world of programming.
            </p>
            <button className='cv'><a href={CV} download className='cva'>Download CV</a></button> 
            </div>
            <div>
                <h1 className='skill-set'>Skill-set</h1>
                <div className="container experience__container">
                    <div className="experience__frontend">
                        <h3 className='aboutSubtitle'>Frontend Development</h3>
                        <div className="experience__content">
                            <article className='experience__detail'>
                                <SiJavascript size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >JavaScirpt</h5>
                                </div>
                            </article>
                            <article className='experience__detail'>
                                <ImHtmlFive2 size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >HTML</h5>
                                </div>
                            </article>
                            <article className='experience__detail'>
                                <SiCss3 size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >CSS</h5>
                                </div>
                            </article>
                            <article className='experience__detail'>
                                <SiReact size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >ReactJS</h5>
                                </div>
                            </article>
                            <article className='experience__detail'>
                                <SiRedux size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >React-Redux</h5>
                                </div>
                            </article>
                            <article className='experience__detail'>
                                <SiJquery size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >JQuery</h5>
                                </div>
                            </article>
                            <article className='experience__detail'>
                                <BsBootstrap size={30} className='experience__details-icon' />
                                <div>
                                    <h5 >Bootstrap</h5>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience__backend">
                        <h3 className='aboutSubtitle'>Backend Development</h3>
                        <div className="experience__content">
                            <article className='experience__detail'>
                                <FaNode size={40} className='experience__details-icon' />
                                <h5>Node.Js</h5>
                            </article>
                            <article className='experience__detail'>
                                <SiExpress size={30} className='experience__details-icon' />
                                <h5>Expres.Js</h5>
                            </article>
                            <article className='experience__detail'>
                                <SiPostgresql size={30} className='experience__details-icon' />
                                <h5>PostgreSQL</h5>
                            </article>
                            <article className='experience__detail'>
                                <SiMysql size={30} className='experience__details-icon' />
                                <h5>MySQL</h5>
                            </article>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </section>
    )
}