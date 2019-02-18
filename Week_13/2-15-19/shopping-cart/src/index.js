import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Cart from "./components/Cart";
import cartReducer from "./reducers/cartReducer";
import App from './App';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(cartReducer, composeWithDevTools(
    applyMiddleWare(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path="/" component={Cart} />
                    <Route path="/app" component={App} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));