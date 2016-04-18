import React, { Component } from 'react';

import AppStore from '../../stores/NoteStore.js';
import NoteActions from '../../actions/NoteActions.js';
import NoteList from './NoteList.js';

function getStateFromStore() {
  return {
    notes: NoteStore.getAllNotes()
  }
}

class NoteContainer extends Component {

  constructor(props){
    super(props);
    this.state = getStateFromStore();
  }

  componentWillMount(){
    AppStore.addChangeListener( this._onChange.bind(this) );
    NoteActions.showAllNotes();
  }

  componentWillUnmount(){
    AppStore.removeChangeListener( this._onChange.bind(this) );
  }

  componentWillReceiveProps(newProps){
    console.log('NoteContainer.js new props', newProps);
  }

  _onChange = () => {
    this.setState(getStateFromStore);
  }

  render() {
    console.log('NoteContainer.js state', this.state);
    return (
      <div>
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default NoteContainer;