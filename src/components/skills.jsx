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
            
            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Programming Languages</h3>
                    <p>I have used and am familiar with Python, C++, C, Java, React.js, YAML, JSON, R, HTML5, CSS, MATLAB, x86 Assembly.</p>
                </div>
                </div>
            </div>

            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Software Engineering </h3>
                    <p>From my Capstone project, software engineering class, and my co-op, I have worked with Agile Methodologies in the form of scrums, sprints, and project management software as well as 
                        I am familiar with requirements elicitation, design, planning, implementation, and testing.
                    </p>
                </div>
                </div>
            </div>

            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Cloud Computing </h3>
                    <p>I have completed a Cloud Computing Architecture class where we learned the basics of being an AWS Solutions Architect and have come out of the class with the knowledge 
                        to complete the Foundational Cloud Practioner and Associate Solutions Architect AWS Certifications. In my Capstone project, we used AWS for all of our backend and worked with 
                        AWS software engineers as our mentors. Within AWS, I personally used: Lambda, API Gateway, CDK, CloudFormation, DyanmoDB, IoT Core,
                        Cognito Pools, IAM, Secrets Manager.
                    </p>
                </div>
                </div>
            </div>

            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Game Engine Design </h3>
                    <p>I created a 2-D game engine that used the SDL 2.0 library for my 2-D Game Engine Design Class.</p>
                </div>
                </div>
            </div>

            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA. This includes search and sorting algorithms, binary trees, greedy algorithms, divide-and-conquer algorithms, and dynamic programming.</p>
                </div>
                </div>
            </div>

        
            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Version Control </h3>
                    <p>I frequently use Git as version control for both my personal and team projects with GitHub being the hosting platform. I have used GitHub Actions for CI/CD.</p>
                </div>
                </div>
            </div>

            <div className="col-auto text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Tools</h3>
                    <p>From my education and work experience, I have become familiar with many tools such as Terraform, Git, Ansible, VSCode, SQLite3, Oracle SQL, Splunk, Datadog, Jira, Confluence, and many 
                        repository platforms like Bitbucket, Gitlab, GitHub, and Replit.</p>
                </div>
                </div>
            </div>

            
            </div>
        </div>
        </section>
    )
  }
}