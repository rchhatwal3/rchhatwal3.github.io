import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar.jsx'
import Introduction from './components/introduction.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import WorkandResearch from './components/workandresearch.jsx'
import Projects from './components/projects.jsx'
import Certifications from './components/certifications.jsx'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Skills></Skills>
          <Projects></Projects>
					<WorkandResearch></WorkandResearch>
          <Certifications></Certifications>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
