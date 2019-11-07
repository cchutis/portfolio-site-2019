import React from 'react';

const FirstName = () => {

    var ReactFitText = require("react-fittext");

    return (
        <div className="first-name-container">
            <ReactFitText compressor={0.82}>
                <h1 className="first-name">
                    CONSTANTINE
                </h1>
            </ReactFitText>
        </div>
    );
}

export default FirstName;
