import {dispatch} from '../dispatchers/AppDispatcher.js';
import NoteConstants from '../constants/NoteConstants.js';
import WebUtil from '../utils/WebUtil.js'

const NoteActions = {

  getAllNotes(){
    console.log("getAllNotes");

    window.setTimeout(() => {
      const notesPromise = WebUtil.getAllNotes();

      notesPromise.then(
        (response) => {
          console.log(`todo3 backend returned successfully`, response);
          dispatch({
            actionType: NoteConstants.NOTE_INDEX,
            notes: response.data
          });
        },
        (response) => {
          console.error(`todo3 backend return failed`, response);
        });
    },1)

  },

  getNote(noteId){
    console.log("show note");

    window.setTimeout(() => {
      const notePromise = WebUtil.getNote(noteId);

      notePromise.then(
        (response) => {
          console.log(`todo3 backend returned successfully`, response);
          dispatch({
            actionType: NoteConstants.NOTE_SHOW,
            note: response.data
          });
        },
        (response) => {
          console.error(`todo3 backend return failed`, response);
        }
      )
    }, 1);

  },

  createNote(comment){
    console.log("create note: ", comment);

    window.setTimeout(() => {
      const notePromise = WebUtil.createNote(comment);
      notePromise.then(
        (response) => {
          console.log(`todo3 backend returned successfully`, response);
          dispatch({
            actionType: NoteConstants.NOTE_CREATE,
            note: response.data
          });
        },
        (response) => {
          console.error(`todo3 backend return failed`, response);
        }
      )
    }, 1);
  },

  deleteNote(noteId){
    console.log("delete note");

    window.setTimeout(() => {
      const notePromise = WebUtil.deleteNote(noteId);

      notePromise.then(
        (response) => {
          console.log(`todo3 backend returned successfully`, response);
          dispatch({
            actionType: NoteConstants.NOTE_DELETE,
            noteId: noteId
          });
        },
        (response) => {
          console.error(`todo3 backend return failed`, response);
        }
      )
    }, 1);
  },

  updateNote(noteId, comment){
    console.log("delete note");

    window.setTimeout(() => {
      const notePromise = WebUtil.updateNote(noteId, comment);

      notePromise.then(
        (response) => {
          console.log(`todo3 backend returned successfully`, response);
          dispatch({
            actionType: NoteConstants.NOTE_UPDATE,
            noteId: noteId,
            comment: comment
          });
        },
        (response) => {
          console.error(`todo3 backend return failed`, response);
        }
      )
    }, 1);
  }

};

export default NoteActions;
window.NoteActions = NoteActions;