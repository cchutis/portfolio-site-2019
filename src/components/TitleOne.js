import React, { Component } from 'react';

var ReactFitText = require("react-fittext");

export default class TitleOne extends Component {
  render() {
    return (
      <div className="title-one-container">
        <ReactFitText compressor={0.68}>
          <h1 className="title-one">{this.props.title}</h1>
        </ReactFitText>
      </div>
    )
  }
}
