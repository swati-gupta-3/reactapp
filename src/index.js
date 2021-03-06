import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./modules/store";

// import EditForm from '../src/modules/APIDISPLAY/Editform'
// import EditSubmitButton from './modules/TrialIntegrate/editsubmitbutton'
// import Formcomp from './modules/bootstrapform/form'
// import PostForm from './modules/postform'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Example from './modules/bootstrapform/formModal'
// import DisplayDemo from "./modules/displayDemo/components/displayDemo";
import ApiDemo from './modules/apiDemo/components/ApiDemo'
// import Try from './modules/tryeditform'

// import DisplayDemo from './modules/displayDemo/components/displayDemo'
render(
    <Provider store={store}>
        {/* <h3 align="center">Display Redux form</h3> */}
        {/* <DisplayDemo /> */}
        {/* <Formcomp/>, */}
        {/* <Example/> */}
    {/* <EditForm/> */}
{/* <ContactPage/> */}
{/* <EditSubmitButton /> */}
{/* <PostForm/> */}
<ApiDemo/>
{/* <Try/> */}
    </Provider>,
    document.getElementById("root")
);