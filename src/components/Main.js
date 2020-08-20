import React from 'react';
import './Main.less';
const Main = () => {
    return (
      <div className="spacing">
      <div className="primary-style">
        Edit src/components/Main.js for content.
      </div>
      <div className="secondary-style">
        Edit craco.config.js to add or modify variables in modifyVars object. 
      </div>
      <div className="primary-style">
      Primary Color
      </div>
      <div className="secondary-style">
        Secondary Color
      </div>
      <div className="primary-style">
      Whatever colour, font-size or any property that you wish to standardize across your app, add it to the modifyVars object. 
      </div>
      </div>
      
    );
  }
  
  export default Main;
  