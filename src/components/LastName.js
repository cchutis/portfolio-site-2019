import React from 'react';

const LastName = () => {

    var ReactFitText = require("react-fittext");

    return (
      <div className="last-name-container">
            <ReactFitText compressor={0.7}>
                <h1 className="last-name">CHUTIS</h1>
            </ReactFitText>
      </div>
    );
}

export default LastName;
