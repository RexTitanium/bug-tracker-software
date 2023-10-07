import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

//Reducers
import authReducer from './Controller/Redux/authSlice'
import bugReducer from './Controller/Redux/bugSlice'
import userReducer from './Controller/Redux/userSlice'
import projectReducer from './Controller/Redux/projectSlice'

const reducer = combineReducers({
    auth:authReducer,
    bugs:bugReducer,
    user:userReducer,
    projects:projectReducer,
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
