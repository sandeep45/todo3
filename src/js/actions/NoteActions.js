import {dispatch} from '../dispatchers/AppDispatcher.js';
import NoteConstants from '../constants/NoteConstants.js';

const NoteActions = {

  showAllNotes(){
    console.log("showAllNotes");

    var notesArray = [
        {text: "Lorem ipsum Ad Excepteur labore aliqua exercitation veniam irure voluptate pariatur exercitation ullamco nulla proident.", id: 1,},
        {text: "Lorem ipsum Sunt laboris voluptate.", id: 2 },
        {text: "Lorem ipsum Sint sed culpa ex et laboris proident commodo id Ut laborum ad est ex non qui culpa et officia eiusmod adipisicing minim nulla commodo aliquip aute cupidatat et culpa elit sit minim quis nisi cillum sint.", id: 3}
      ];

    dispatch({
      actionType: NoteConstants.NOTE_INDEX,
      notes: notesArray
    })
  }

};

export default NoteActions;
window.NoteActions = NoteActions;