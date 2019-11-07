import React, { Component } from 'react';

export default class PortfolioEntries extends Component {

    renderProjects = () => {
        return this.props.projects.map(project => {
            return <h3>{project.name}</h3>
        })
    }

    render() {
        return (
            <div className="portfolio-box">
                {this.renderProjects()}
            </div>
        );
    }
}

