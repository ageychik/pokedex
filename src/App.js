import React from 'react';
import { Provider } from "react-redux";
import {store} from "./store";
import IndexPage from  './pages/index';

// Components
import Header from  './components/header/Header';
import Footer from  './components/footer/Footer';

export default () =>
    <Provider store={store}>
        <main>
            <Header/>
            <div className="scroll">
                <IndexPage />
                <Footer/>
            </div>
        </main>
    </Provider>;
