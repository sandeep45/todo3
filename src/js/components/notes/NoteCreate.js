import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NoteStore from '../../stores/NoteStore.js';
import NoteActions from '../../actions/NoteActions.js';


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

        <form className="form-horizontal" onSubmit={this._createForm}>

          <div className="form-group">
            <label for="inputComment" className="col-sm-2 control-label">Comment</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputComment"
                placeholder="Lorem ipsum Tempor Excepteur anim tempor eiusmod."
                ref={(c) => this._commentBox = c} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Create Note</button>
              &nbsp;
              <Link to="/notes" className="btn btn-default">Back to all Notes </Link>
            </div>
          </div>

        </form>
      </div>
    );
  };

  _createForm = (evt) => {
    console.log('in create Form: ', this._commentBox.value);
    evt.preventDefault();
    NoteActions.createNote(this._commentBox.value);
    console.log("need to go back to notes page now.")
    this.context.router.push("/notes");
  }
};

NoteCreate.contextTypes = {
  router: PropTypes.object.isRequired
}