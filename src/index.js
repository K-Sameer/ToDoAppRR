import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Route, Switch } from 'react-router' // react-router v4/v5
import { BrowserRouter as Router } from "react-router-dom"
import mainReducer from './reducers/mainReducer';
import App from './App';
import TodoItemDetails from './containers/TodoItemDetails';
import logger from 'redux-logger'
export const history = createBrowserHistory();


const store = createStore(
    mainReducer(history), 
    {},
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
      ),
    )
  )

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> 
            <Router> 
            <Switch>
                <Route exact path="/" render={() => (<App/>)} />
                <Route path="/:id" render={() => (<TodoItemDetails/>)} />
            </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

