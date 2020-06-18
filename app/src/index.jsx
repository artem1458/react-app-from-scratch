import React from 'react';
import ReactDom from 'react-dom';
import { Main } from 'pages/Main';
import('./index.less');

const App = () => (
    <Main />
);

ReactDom.render(<App />, document.getElementById('root'));
