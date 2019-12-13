import React, {Component} from 'react';

var ReactFitText = require("react-fittext");

export default class TitleTwo extends Component {
    render() {
      return (
        <div className="title-two-container">
          <ReactFitText compressor={0.68}>
            <h1 className="title-two">{this.props.title2}</h1>
          </ReactFitText>
        </div>
      )
    }
}
