import React from 'react';
import { Provider } from "react-redux";
import {store} from "./store";
import IndexPage from  './pages/index';


export default () =>
    <Provider store={store}>
        <main><IndexPage /></main>
    </Provider>;
