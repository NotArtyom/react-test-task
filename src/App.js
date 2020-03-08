import React from 'react';

import Layout from './layout';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import LoginPage from './routes/LoginPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
   <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
        {/*<PrivateRoute exact path="/login" component={LoginPage} />*/}
      </Switch>
      {/*<Layout name={"Проекты"}/>*/}
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
