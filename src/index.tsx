import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.less';

ReactDOM.render((<BrowserRouter><App></App></BrowserRouter>), document.getElementById('root'));