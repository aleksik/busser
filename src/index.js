import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'index.css';
import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';
import configureStore from 'configureStore';

const store = configureStore();

const Main = () => <Provider store={store}><App /></Provider>

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
