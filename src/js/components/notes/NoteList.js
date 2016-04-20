import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NoteStore from '../../stores/NoteStore.js';
import NoteActions from '../../actions/NoteActions.js';
import NoteDetail from './NoteDetail.js';

function getStateFromStore() {
  return {
    notes: NoteStore.getAllNotes()
  }
}

export default class NoteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: getStateFromStore().notes || []
    }
  }

  componentWillMount(){
    NoteStore.addChangeListener( this._onChange );
    NoteActions.getAllNotes();
  }

  componentWillUnmount(){
    NoteStore.removeChangeListener( this._onChange );
  }

  componentWillReceiveProps(newProps){
    console.log('NoteContainer.js new props', newProps);
  }

  _onChange = () => {
    this.setState(getStateFromStore);
  }

  render(){
    return (
      <div className="notesList">

        <div className="panel panel-default">
          <div className="panel-heading">
            Notes List
          </div>
          <div className="panel-body">
            <input type="button" className="btn btn-primary"
              value="Reload" onClick={this._reload} />
            &nbsp;
            <Link to="/notes/create" className="btn btn-primary">Add New</Link>
          </div>
          <ul className="list-group">
            {this.state.notes.map( (note) => {
                return (
                  <li className="list-group-item" key={note.id}>
                    {note.id} - {note.comment} - <Link to={`/notes/${note.id}`} className="">
                      See Detail
                    </Link>
                    -
                    <a href="javascript:void(0);" className="text-danger"
                      onClick={this._destroy.bind(this, note.id)}>Destroy</a>
                    -
                    <Link to={`/notes/${note.id}/edit`}>Edit</Link>

                  </li>
                );
              })
            }
          </ul>
        </div>

      </div>
    );
  }

  _reload = () => NoteActions.getAllNotes();

  _destroy = (noteId) => {
    NoteActions.deleteNote(noteId)
  };

};