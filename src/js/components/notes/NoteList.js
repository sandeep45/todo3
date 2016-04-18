import React, { Component, PropTypes } from 'react';

export default class NoteList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="notesList">
        <ul className="list-group">
          {this.props.notes.map( (note) => {
              return (
                <li className="list-group-item" key={note.id}>{note.text}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}