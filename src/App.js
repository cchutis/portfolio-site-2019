import React, { Component } from 'react';
import './styles.css';
import './button.sass'
import MainContainer from './containers/MainContainer';

const API = 'http://localhost:3000/projects';

let currentID = 0;

export default class App extends Component {
  
  state = {
    projects: [],
    selectedProject: {},
    background: "white",
    title: "SOFTWARE",
    title2: "ENGINEER"
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = () => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        this.setState({
          projects: data
        })
      })
  }

  projectPicker = (e) => {
    //Right Arrow Picker
    if(e.keyCode === 39) {
      console.log("Right Arrow")
      if(currentID >= 0 && currentID < this.state.projects.length) {
        currentID++
        this.setProjectParameters()  
      }
    }
    //Left Arrow Picker
    if(e.keyCode === 37) {
      console.log("Left Arrow")
      if(currentID <= this.state.projects.length) {
        currentID--
        this.setProjectParameters()
      }
    }
  }
  

  setProjectParameters = () => {
    this.setState({
      selectedProject: this.state.projects[currentID],
      background: this.state.selectedProject.color,
      title: this.state.selectedProject.subtitle,
      title2: this.state.selectedProject.subtitle2
    });
  }

  render() {
    return (
      <div className="app">
        <MainContainer title={this.state.title} title2={this.state.title2} projects={this.state.projects} projectPicker={this.projectPicker} background={this.state.background}/>
      </div>
    );
  }

}
