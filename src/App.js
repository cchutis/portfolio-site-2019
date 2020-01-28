import React, { Component } from 'react';
import './styles.css';
import './button.sass'
import MainContainer from './containers/MainContainer';

const API = 'http://localhost:3000/projects';

export default class App extends Component {
  
  // set selectedProject and have elements update off slectecproject
  state = {
    currentID: 0,
    projects: [],
    selectedProject: {}
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = () => 
    fetch(API)
      .then(r => r.json())
      .then(data => {
        this.setState({
          projects: data,
          selectedProject: data[this.state.currentID]
        })
      })
      .catch((error) => {
        console.log(error)
      });

  projectPicker = (e) => {
    //Right Arrow Picker
    if(e.keyCode === 39) {
      if (this.state.selectedProject.id < this.state.projects.length) {
        this.setState({
          currentID: this.state.currentID + 1
        }, () => {
          this.setProjectParameters(this.state.currentID)
        })
      } else {
        console.log("Max Limit Reached")
      }
    }
    //Left Arrow Picker
    if(e.keyCode === 37) {
      if(this.state.selectedProject.id > 1) {
        this.setState({
          currentID: this.state.currentID - 1
        }, () => {
          this.setProjectParameters(this.state.currentID)
        })
      } else {
        console.log("Min Limit Reached")
      }
    }
  }

  setProjectParameters = (id) => {

    this.setState({
      selectedProject: this.state.projects[id]
    });
  }

  render() {
    return (
      <div className="app">
        <MainContainer project={this.state.selectedProject} projectPicker={this.projectPicker} />
      </div>
    );
  }

}
