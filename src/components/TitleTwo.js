import React from 'react';

const TitleTwo = () => {

    var ReactFitText = require("react-fittext");

    return (
      <div className="title-two-container">
        <ReactFitText compressor={0.68}>
          <h1 className="title-two">DEVELOPER</h1>
        </ReactFitText>
      </div>
    );
}

export default TitleTwo;
