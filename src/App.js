import React, { Component } from 'react';
import './styles.css';
import './button.sass'
import MainContainer from './containers/MainContainer';

const API = 'http://localhost:3000/projects';

let currentColor = 0;
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
    background: "green",
    selectedProject: {}
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

  colorChanger = (e) => {
    
    
    if(e.keyCode === 37) {
      console.log("Left")
      if(currentColor !== 0) {
        currentColor--
        this.setState({
          background: colorArray[currentColor]
        })
      }
    } else if(e.keyCode === 39) {
      console.log("Right")
      if(currentColor !== 6) {
        currentColor++
        this.setState({
          background: colorArray[currentColor]
        });
      }
    }
  }

  // backgroundChange = (id) => {
  //   const backgroundImg = this.state.projects.filter(project => id === project.id)
  //   this.setState({
  //     background: backgroundImg
  //   })
  // }

  render() {
    return (
      <div className="app">
        <MainContainer projects={this.state.projects} colorChanger={this.colorChanger} background={this.state.background}/>
      </div>
    );
  }

}
