import React from 'react';

import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import LoginPage from './routes/LoginPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import {Router} from 'react-router-dom';

import { history } from './helpers/history';
import ProjectPage from './routes/ProjectPage';
import ProjectStructurePage from './routes/ProjectStructurePage';

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
   <Provider store={store}>
    <div className="App">
      <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={ProjectPage} />
        <PrivateRoute exact path="/Project" component={ProjectStructurePage}/>*/}
      </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
