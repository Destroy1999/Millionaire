import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';


const Bapp = <BrowserRouter>
                <App/>
            </BrowserRouter>

ReactDOM.render(Bapp, document.getElementById('root'));

