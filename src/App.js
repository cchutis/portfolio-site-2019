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
    background: "white"
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
      background: this.state.selectedProject.color
    });
  }

  render() {
    return (
      <div className="app">
        <MainContainer projects={this.state.projects} projectPicker={this.projectPicker} background={this.state.background}/>
      </div>
    );
  }

}
