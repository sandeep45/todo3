import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NoteStore from '../../stores/NoteStore.js';
import NoteActions from '../../actions/NoteActions.js';
import NoteForm from './NoteForm.js'


export default class NoteCreate extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
      <div>

        <div className="page-header">
          <h1>Note Create <small> / Go crazy with the comment</small></h1>
        </div>

        <NoteForm formSubmitHandler={this._createForm} />

      </div>
    );
  };

  _createForm = (comment) => {
    console.log('in create Form: ', comment);
    NoteActions.createNote(comment);
    console.log("need to go back to notes page now.")
    this.context.router.push("/notes");
  }
};

NoteCreate.contextTypes = {
  router: PropTypes.object.isRequired
}