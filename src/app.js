import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import regexLib from './utils/regexLib';
import App from './components/App';

console.log(regexLib.isUrl);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);