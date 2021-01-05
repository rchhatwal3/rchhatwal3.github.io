import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
      return (
        <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Game Engine Design </h3>
                    <p>I created a 2-D game engine that used the SDL 2.0 library for my 2-D Game Engine Design Class.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Programming Languages</h3>
                    <p>I have used and am familiar with C, C++, Python, Java, React.js, x86 Assembly, HTML5 and CSS.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Version Control </h3>
                    <p>I frequently use Git as version control for both my personal and team projects with GitHub being the hosting platform.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Software Engineering Lifecycle </h3>
                    <p>From my software engineering class, I am familiar with requirements elicitation, design, planning, implementation, and testing with JUnit.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Agile Methodologies </h3>
                    <p>From my software engineering class and my co-op, I have worked with Agile Methodologies in the form of scrums, sprints, and project management software.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
  }
}