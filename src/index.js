import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";



    ReactDOM.render(

            <Provider store={store}>
                <App/>
            </Provider>,

        document.getElementById('root')
    );



serviceWorker.unregister();

