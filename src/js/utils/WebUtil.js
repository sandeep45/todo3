import axios from 'axios'

const WebUtil = {

  getAllNotes: function(){
    return axios.get("http://localhost:3000/notes.json");
  },

  getNote: function(noteId){
    return axios.get(`http://localhost:3000/notes/${noteId}.json`);
  },

  createNote: function(comment){
    return axios.post("http://localhost:3000/notes.json", {
      comment: comment
    });
  },

  deleteNote: function(noteId){
    return axios.delete(`http://localhost:3000/notes/${noteId}.json`)
  }

};

export default WebUtil;