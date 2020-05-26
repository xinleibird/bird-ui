import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import Alert from './components/Alert';
var App = function () {
    return React.createElement(Alert, { message: "Message", description: "This is description" });
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.js.map