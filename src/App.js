import React, { Component } from 'react';
import './styles.css';
import MainContainer from './containers/MainContainer';

const API = 'http://localhost:3000/projects';

export default class App extends Component {
  
  state = {
    projects: [],
    background: ""
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

  backgroundChange = (id) => {
    const backgroundImg = this.state.projects.filter(project => id === project.id)
    this.setState({
      background: backgroundImg
    })
  }

  render() {
    return (
      <div className="app">
        <MainContainer projects={this.state.projects} backgroundChange={this.backgroundChange} />
      </div>
    );
  }

}
