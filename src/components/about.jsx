import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>As of 2023, I am a Site Reliability Engineer at Ally focusing on AWS, as well as a student at Georgia Institute of Technology getting my Master's of Computer Science with a speciailization in Computer Systems.</p>
                    <p>My goals for 2023 are to continue to progress in my career by creating software that can be used by others, optimizing costs for the applications that I work with, as well as continue driving the growth/learning of SRE at Ally. I would also like to get at least 1 more AWS certification as well as my Python or Terraform certification by the end of the year. On the side, I would like to create software dealing with Apple Music/Spotify as well as Airbnb/VRBO, and other rental companies.</p>
                    <p>When I am not programming or doing schoolwork, I am usually found doing something active. I regularly play and referee soccer, play golf, as well as powerlift. On the weekends, I am usually at the soccer field refereeing youth and adult games, which I have been doing for over the past 10 years.</p>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
