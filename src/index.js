import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";



    ReactDOM.render(

            <Provider store={store}>
                <HashRouter>
                <App/>
                    </HashRouter>
            </Provider>,

        document.getElementById('root')
    );



serviceWorker.unregister();

