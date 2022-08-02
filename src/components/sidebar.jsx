import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav> */}
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.JPG)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Ramneek Chhatwal</a></h1>
              <span className="email"><a href="mailto: ramychha@gmail.com" target="_blank" rel="noreferrer"><i className="icon-mail"></i>ramychha@gmail.com</a></span><br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#workandresearch" data-nav-section="workandresearch">Work, School and Research</a></li>
                  <li><a href="#certifications" data-nav-section="certifications">Certifications</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="mailto: ramychha@gmail.com" target="_blank" rel="noreferrer"><i className="icon-mail2"></i></a></li>
                <li><a href="https://github.com/rchhatwal3" target="_blank" rel="noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ramneek-chhatwal/" target="_blank" rel="noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://www.facebook.com/ramneek.chhatwal" target="_blank" rel="noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/RamneekChhatwal" target="_blank" rel="noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ramneek_chhatwal/" target="_blank" rel="noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
            <p><small>
              <br></br>
                Something coming soon!!
              </small></p>
              <p><large>
                  <i className="icon-khanda" aria-hidden="true" /><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a> for inspiration 
              </large></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
