import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

// const expresys = require("express");
//

// const cors = require("cors");
//
// const app = express();
//
// app.use(cors({credentials: true}));
//

ReactDOM.render(
    <BrowserRouter basename="/demo/corona-react-free/template/demo_1/preview">
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();