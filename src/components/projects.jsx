import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project/reactlogo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/rchhatwal3/Website-Portfolio" target="_blank" ref="noopener noreferrer">This Website</a></h3>
											<span>This Website is going to be used as a representation of my portfolio. I used React.js, HTML5, and CSS to complete this.</span>
											<p className="icon">
												<span><a href="https://github.com/rchhatwal3/Website-Portfolio" target="_blank" ref="noopener noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/project/AstronautSpriteSheet210by93.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/rchhatwal3/2D-Game-using-SDL2.0" target="_blank" rel="noopener noreferrer">Moontian - Escape from the Planet</a></h3>
											<span>I made this as a final project for my 2-D game engine design class at Clemson. This game was made using C++ with the SDL 2.0 library and implemented game design aspects like sprite animation, UI, collision detection and response, and TTF fonts.</span>
											<p className="icon">
												<span><a href="https://github.com/rchhatwal3/2D-Game-using-SDL2.0" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/project/ppmoutput.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/rchhatwal3/making-ppm-pics-using-shapes" target="_blank" rel="noopener noreferrer">Fun with PPM Images</a></h3>
											<span>This project was made during my Introduction to C++ class. This project's goal was to create an overall PPM image from scratch using a text file. In the project, I created the ability to take in a text file containts the shape, coordinates, radius (for a circle), and color for the specific layer the user wanted to display on the PPM image. This was done using polymorphism and abstraction.</span>
											<p className="icon">
												<span><a href="https://github.com/rchhatwal3/making-ppm-pics-using-shapes" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/project/connectx.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/rchhatwal3/ConnectX-Using-Java-Swing" target="_blank" rel="noopener noreferrer">ConnectX Game with GUI</a></h3>
											<span>This was the semester-long project I worked on for my Software Development Foundations class. </span>
											<p className="icon">
												<span><a href="https://github.com/rchhatwal3/ConnectX-Using-Java-Swing" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project/gbnprotocol.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="href=https://github.com/rchhatwal3/GBN-Protocol-Implementation" target="_blank" rel="noopener noreferrer">Go-Back-N Protocol Implementation</a></h3>
											<span>This project was written in Python 3.5.2 for my Networks Engineering class which was to implement the Go-Back-N (GBN) Protocol for Reliable Data Transfer.</span>
											<p className="icon">
												<span><a href="https://github.com/rchhatwal3/GBN-Protocol-Implementation" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/project/simplexmethod.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/rchhatwal3/SimplexMethodCalculator" target="_blank" rel="noopener noreferrer">Simplex Method Calculator</a></h3>
											<span>This project was part of my final project for my Linear Programming class. In this project, myself and my groupmate used C++ to create a solver for Simplex Mehtod problems where the A matrix, b vector, and cost vector are given. We also implemented Bland's Rule for anti-cycling to ensure the rare case of cycling never happens.</span>
											<p className="icon">
												<span><a href="https://github.com/rchhatwal3/SimplexMethodCalculator" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/rchhatwal3" className="btn btn-primary btn-lg btn-load-more">See more projects <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
