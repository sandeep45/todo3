import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#navbar"
                aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Todo3</Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/notes">Notes</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}