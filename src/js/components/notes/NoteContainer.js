import React, { Component } from 'react';

import NoteList from './NoteList.js';

class NoteContainer extends Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log('NoteContainer.js state', this.state);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default NoteContainer;