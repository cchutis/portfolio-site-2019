import React, { Component } from 'react';
import './styles.css';
import './button.sass'
import MainContainer from './containers/MainContainer';

const API = 'http://localhost:3000/projects';

export default class App extends Component {
  
  state = {
    currentID: 1,
    projects: [],
    selectedProject: {id: 1},
    title: "FRONTEND",
    title2: "DEVELOPER",
    background: "bkg/texture.jpg"
  }

  componentDidMount() {
    this.getProjects()
    console.log(this.state.currentID)
  }

  getProjects = () => 
    fetch(API)
      .then(r => r.json())
      .then(data => {
        this.setState({
          projects: data
        })
      })
      .catch((error) => {
        console.log(error)
      });

  projectPicker = (e) => {
    //Right Arrow Picker
    if(e.keyCode === 39) {
      console.log("Right Arrow")
      if(this.state.currentID < this.state.projects.length) {
        this.setState({
          currentID: this.state.currentID += 1
        })
        this.setProjectParameters()  
      }
    }
    //Left Arrow Picker
    if(e.keyCode === 37) {
      console.log("Left Arrow")
      if(this.state.currentID >= 1) {
        this.setState({
          currentID: this.state.currentID -= 1
        })
        this.setProjectParameters()
      }
    }
  }
  

  setProjectParameters = () => {
    this.setState({
      selectedProject: this.state.projects[this.state.currentID],
      background: this.state.selectedProject.background,
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
