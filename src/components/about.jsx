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
                     <p>I’m a Site Reliability Engineer III at JPMorgan Chase, where I focus on building reliable, scalable, and cost-efficient systems that support core banking applications. Over my career, I’ve worked on everything from large-scale cloud migrations to reliability automation, Kubernetes optimization, monitoring modernization, and major cost-reduction initiatives. I’m driven by solving complex technical problems, building tools that make engineering smoother, and improving the reliability and performance of systems at scale.</p>
                     <p>I earned my Master’s in Computer Science from Georgia Tech with a specialization in Computer Systems, which strengthened my foundation in distributed systems and reliability engineering. I’ve applied that background across major projects including pipeline consolidation, automated certificate management, DR environment design, cloud and observability migrations, and reliability engineering practices like chaos testing, SLO/SLA onboarding, and MTTR reduction. I love the mix of engineering, operations, and problem-solving that SRE gives me, and I’m continuously growing through certifications, hands-on work, and cross-team collaboration.</p>
                     <p>Outside of work, I stay active—refereeing soccer (which I’ve done for over 10 years), playing whenever I can, powerlifting, golfing, and now training for the 2026 NYC marathon. I’ve always found that staying active balances me out and keeps me grounded. Whether it’s engineering or athletics, I enjoy pushing myself, learning, and improving over time. My personal projects and goals include at least 1 more AWS certification, FinOps certification, and Kubernetes certification, as well as creating software dealing with Apple Music/Spotify migrations/song analysis, platform for Airbnb and VRBO users, and a centralized calendar system for all of the refereeing assigning platforms I use.</p>
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
