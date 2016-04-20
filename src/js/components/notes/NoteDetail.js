import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NoteStore from '../../stores/NoteStore.js';
import NoteActions from '../../actions/NoteActions.js';

function getStateFromStore() {
  const noteId = this.state.noteId;

  console.log("getStateFromStore: " + noteId);
  return {
    note: NoteStore.getNote(noteId) || {}
  };
}

export default class NoteDetail extends Component {
  constructor(props){
    super(props);
    let noteId = null;
    noteId = this.props.params.noteId;
    this.state = {
      noteId: noteId
    };
    NoteActions.showNote(noteId);
    this.state.note = getStateFromStore.call(this).note;
  }

  componentWillMount(){
    NoteStore.addChangeListener( this._onChange );
  }

  componentWillUnmount(){
    NoteStore.removeChangeListener( this._onChange );
  }

  componentWillReceiveProps(newProps){
    console.log("updating props")
    let noteId = null;

    noteId = this.props.params.noteId;

    this.setState({
      noteId: noteId
    });

    NoteActions.showNote(noteId);
  }

  _onChange = () => {
    console.log("on change of NoteDetail fired");
    this.setState(getStateFromStore);
  }

  render(){
    const note = this.state.note;
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Note Detail
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-2 text-right">Id : </div>
              <div className="col-sm-10 ">{note.id}</div>
            </div>
            <div className="row">
              <div className="col-sm-2 text-right">Comment : </div>
              <div className="col-sm-10">{note.comment}</div>
            </div>
            <div className="row">
              <div className="col-sm-2 text-right">Created At : </div>
              <div className="col-sm-10">{note.created_at}</div>
            </div>
            <div className="row">
              <div className="col-sm-2 text-right">Updated At : </div>
              <div className="col-sm-10">{note.updated_at}</div>
            </div>
          </div>
          <div className="panel-footer">
            <Link to="/notes">Back to All Notes</Link>
          </div>
        </div>
      </div>
    );
  }
};