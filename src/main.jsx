import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from "./redux/formDataSlice.js";

const store = configureStore({
    reducer: {
        formData: formDataReducer,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </Provider>
);

export default store;