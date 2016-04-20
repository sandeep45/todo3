import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NoteForm extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
      <form className="form-horizontal" onSubmit={this._createForm}>
        <div className="form-group">
          <label for="inputComment" className="col-sm-2 control-label">Comment</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputComment"
              placeholder={this.props.commentPlaceholderValue}
              ref={(c) => this._commentBox = c} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
            &nbsp;
            <Link to="/notes" className="btn btn-default">Back to all Notes </Link>
          </div>
        </div>

      </form>
    )
  };

  _createForm = (evt) => {
    evt.preventDefault();
    this.props.formSubmitHandler(this._commentBox.value);
  }
};

NoteForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
  commentPlaceholderValue: PropTypes.string
}

NoteForm.defaultProps = {
  commentPlaceholderValue: "Lorem ipsum Tempor Excepteur anim tempor eiusmod."
}

export default NoteForm;