import * as ReactDOMClient from 'react-dom/client';

import React from 'react';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import "./styles/common.scss";
import "./styles/header.scss";
import "./styles/app.scss";
import "./styles/section1.scss";
import "./styles/section2_aboutMe.scss";
import "./styles/section3_skills.scss";
import "./styles/section4_portfolio.scss";
import "./styles/section5_experiences.scss";
import "./styles/s5_listTxt.scss";
import "./styles/section6_contact.scss";
import "./styles/footer.scss";
import "./styles/c_clickBtn.scss";
import "./styles/c_card3D.scss"
import "./styles/c_loader.scss"
import "./styles/s1_wipeAnimation.scss"

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



