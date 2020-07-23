import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import VideoCreate from './videos/VideoCreate';
import VideoEdit from './videos/VideoEdit';
import VideoDelete from './videos/VideoDelete';
import VideoList from './videos/VideoList';
import VideoShow from './videos/VideoShow';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={VideoList} />
            <Route path="/videos/new" exact component={VideoCreate} />
            <Route path="/videos/edit/:id" exact component={VideoEdit} />
            <Route path="/videos/delete/:id" exact component={VideoDelete} />
            <Route path="/videos/:id" exact component={VideoShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
