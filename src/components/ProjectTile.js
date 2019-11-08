import React, { Component } from 'react'


export default class ProjectTile extends Component {

    render() {
        return (
            <div className="project-tile">
                <h2>{this.props.project.name}</h2>
                <h4>{this.props.project.project_type}</h4>
                <p>{this.props.project.description}</p>
            </div>
        )
    }
}
