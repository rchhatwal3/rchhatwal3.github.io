import React, { Component } from 'react'

export default class Certifications extends Component {
  render() {
    return (
        <div>
            <section className="colorlib-certifications" data-section="certifications">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">More Learning</span>
                    <h2 className="colorlib-heading">Certifications</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                
                <div className="col-auto text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-book" />
                    </span>
                    <div className="desc">
                        <h3><a href="https://www.credly.com/badges/c0dae881-cb1c-46d9-af9a-747b8f345929?source=linked_in_profile" target="_blank" rel="noreferrer">AWS Certified Cloud Practitioner</a></h3>
                        <p>Provided by Amazon Web Services (AWS) | Received in April 2022.</p>
                    </div>
                    </div>
                </div>

                <div className="col-auto text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-book" />
                    </span>
                    <div className="desc">
                        <h3><a href="https://www.linkedin.com/in/ramneek-chhatwal/" target="_blank" rel="noreferrer">Mental Health First Aid</a></h3>
                        <p>Provided by National Council for Mental Wellbeing | Received in May 2021.</p>
                    </div>
                    </div>
                </div>

                <div className="col-auto text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-book" />
                    </span>
                    <div className="desc">
                        <h3><a href="https://www.linkedin.com/in/ramneek-chhatwal/" target="_blank" rel="noreferrer">Certified Adaptive Recreation & Sports Specialist - 1</a></h3>
                        <p>Provided by BlazeSports America | Received in December 2020.</p>
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
