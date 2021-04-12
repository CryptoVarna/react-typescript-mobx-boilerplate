import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { TranslationProvider } from "translations";

// Pages
import App from "./pages/App";

// Stores
import SampleStore, { SampleStoreContext } from "stores/SampleStore";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// DI
const sampleStore = new SampleStore();

ReactDOM.render(
    <TranslationProvider>
        <SampleStoreContext.Provider value={sampleStore}>
            <HashRouter>
                <App />
            </HashRouter>
        </SampleStoreContext.Provider>
    </TranslationProvider>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
