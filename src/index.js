import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./modules/store";
// import Formcomp from './modules/bootstrapform/form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './modules/bootstrapform/formModal'
// import DisplayDemo from "./modules/displayDemo/components/displayDemo";
import DisplayDemo from './modules/displayDemo/components/displayDemo'
render(
    <Provider store={store}>
        <DisplayDemo />
        {/* <Formcomp/>, */}
        <Example/>
    </Provider>,
    document.getElementById("root")
);