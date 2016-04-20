import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NoteStore from '../../stores/NoteStore.js';
import NoteActions from '../../actions/NoteActions.js';
import NoteForm from './NoteForm.js'

function getStateFromStore() {
  const noteId = this.state.noteId;

  return {
    note: NoteStore.getNote(noteId) || {}
  };
}

export default class NoteEdit extends Component {
  constructor(props){
    super(props);
    let noteId = null;
    noteId = this.props.params.noteId;
    this.state = {
      noteId: noteId
    };
    this.state.note = getStateFromStore.call(this).note;
    NoteActions.getNote(noteId);
  }

  componentWillMount(){
    NoteStore.addChangeListener( this._onChange );
  }

  componentWillUnmount(){
    NoteStore.removeChangeListener( this._onChange );
  }

  componentWillReceiveProps(newProps){
    let noteId = null;

    noteId = newProps.params.noteId;

    this.setState({
      noteId: noteId
    });

    NoteActions.getNote(noteId);
  }

  _onChange = () => {
    this.setState(getStateFromStore);
  }

  render(){
    const note = this.state.note;
    return (
      <div>
        <div className="page-header">
          <h1>Note Edit <small> / {note.id}</small></h1>
        </div>

        <NoteForm formSubmitHandler={this._updateNote}
          commentPlaceholderValue={this.state.note.comment} />
      </div>
    );
  };

  _updateNote = (comment) => {
    console.log("need to update " ,   this.state.note.id, "to have comment of", comment);
    NoteActions.updateNote(this.state.noteId, comment)
    this.context.router.push("/notes");
  }
};

NoteEdit.contextTypes = {
  router: PropTypes.object.isRequired
}