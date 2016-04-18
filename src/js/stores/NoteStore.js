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
  }

});

export default NoteStore;
window.NoteStore = NoteStore;

register( function(action){
  switch(action.actionType){
    case NoteConstants.NOTE_INDEX:
      console.log("NoteStore.js - NOTE_INDEX action with: ", action.notes);
      _notes = action.notes
      NoteStore.emitChange();
      break;
    default:
      console.log(`NoteStore.js - Unknown Action ${action.actionType}`);
  }
});