import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Dashboard from '../components/Dashboard';
import NoteContainer from '../components/notes/NoteContainer';
import NoteList from '../components/notes/NoteList';
import NoteDetail from '../components/notes/NoteDetail';
import NoteCreate from '../components/notes/NoteCreate';

export default (

  <Route path="/" component={App}>

    <IndexRoute component={Dashboard} />

    <Route path="/notes" component={NoteList}>

    </Route>

    <Route path="/notes/create" component={NoteCreate} />

    <Route path="/notes/:noteId" component={NoteDetail} />

  </Route>

);