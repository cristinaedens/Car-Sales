import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {listReducer} from "./reducers/listReducer";
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(listReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
