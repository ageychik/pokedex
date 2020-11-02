import React from 'react';
import { Provider } from "react-redux";
import {store} from "./store";
import IndexPage from  './pages/index';

// Components
import Header from  './components/header/Header';
import Footer from  './components/footer/Footer';
import Modal from  './components/modal/Modal';

export default () =>
    <Provider store={store}>
        <main>
            <Modal />
            <Header/>
            <IndexPage />
            <Footer/>
        </main>
    </Provider>;
