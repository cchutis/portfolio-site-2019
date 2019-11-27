import React, { Component } from 'react';
import './styles.css';
import './button.sass'
import MainContainer from './containers/MainContainer';

const API = 'http://localhost:3000/projects';

let currentID = 0;
const colorArray = [
  "green",
  "red",
  "blue",
  "pink",
  "orange",
  "yellow",
  "purple"
];

export default class App extends Component {
  
  state = {
    projects: [],
    selectedProject: {},
    background: "green"
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

  // colorChanger = (e) => {
    
    
  //   if(e.keyCode === 37) {
  //     console.log("Left")
  //     if(currentColor !== 0) {
  //       currentColor--
  //       this.setState({
  //         background: colorArray[currentColor]
  //       })
  //     }
  //   } else if(e.keyCode === 39) {
  //     console.log("Right")
  //     if(currentColor !== 6) {
  //       currentColor++
  //       this.setState({
  //         background: colorArray[currentColor]
  //       });
  //     }
  //   }
  // }

  // backgroundChange = (id) => {
  //   const backgroundImg = this.state.projects.filter(project => id === project.id)
  //   this.setState({
  //     background: backgroundImg
  //   })
  // }

  render() {
    return (
      <div className="app">
        <MainContainer projects={this.state.projects} projectPicker={this.projectPicker} background={this.state.background}/>
      </div>
    );
  }

}
