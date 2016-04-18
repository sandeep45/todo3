import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Dashboard from '../components/Dashboard';
import NoteContainer from '../components/notes/NoteContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/notes" component={NoteContainer} />
  </Route>
);