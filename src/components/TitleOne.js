import React from 'react';

const TitleOne = () => {

    var ReactFitText = require("react-fittext");

    return (
      <div className="title-one-container">
        <ReactFitText compressor={0.62}>
          <h1 className="title-one">FRONTEND</h1>
        </ReactFitText>
      </div>
    );
}

export default TitleOne;
