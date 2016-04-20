import {EventEmitter} from 'events';
import {register} from '../dispatchers/AppDispatcher.js';
import NoteConstants from '../constants/NoteConstants.js';

var _notes = [];

const CHANGE_EVENT = "change";

const NoteStore = Object.assign({}, EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getAllNotes() {
    return _notes;
  },

  getNote(noteId){
    return _notes.find( (elem, idx, array) => elem.id == noteId)
  }

});

export default NoteStore;
window.NoteStore = NoteStore;

register( function(action){

  let noteIndex;

  switch(action.actionType){

    case NoteConstants.NOTE_INDEX:
      console.log("NoteStore.js - NOTE_INDEX action with: ", action.notes);
      _notes = action.notes
      NoteStore.emitChange();
      break;

    case NoteConstants.NOTE_SHOW:
      console.log("NoteStore.js - NOTE_SHOW action with: ", action.note);
      noteIndex = _notes.findIndex( (note) => note.id == action.note.id )
      if(noteIndex == -1){
        _notes.push(action.note);
      }else{
        _notes[noteIndex] = action.note;
      }
      NoteStore.emitChange();
      break;

    case NoteConstants.NOTE_CREATE:
      console.log("NoteStore.js - NOTE_CREATE action with: ", action.note);
      _notes.push(action.note);
      NoteStore.emitChange();
      break;

    case NoteConstants.NOTE_DELETE:
      console.log("NoteStore.js - NOTE_DELETE action with: ", action.noteId);
      noteIndex = _notes.findIndex( (note) => note.id == action.noteId )
      _notes.splice(noteIndex, 1);
      NoteStore.emitChange();
      break;

    case NoteConstants.NOTE_MOUSEOVERED:
      console.log("NoteStore.js - NOTE_MOUSEOVERED action with: ", action.noteId);
      _mouseOveredNoteId = action.noteId;
      NoteStore.emitChange();
      break;

    default:
      console.log(`NoteStore.js - Unknown Action ${action.actionType}`);
  }

});