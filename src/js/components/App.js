import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation'

require("../../css/app.css");

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}