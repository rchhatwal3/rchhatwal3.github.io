import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import WorkandResearch from './components/workandresearch'
import Projects from './components/projects'

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
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
