import React from 'react';

const LastName = () => {

    var ReactFitText = require("react-fittext");

    return (
      <div className="last-name-container">
            <ReactFitText compressor={.5}>
                <h1 className="last-name">TSOUTIS</h1>
            </ReactFitText>
      </div>
    );
}

export default LastName;
