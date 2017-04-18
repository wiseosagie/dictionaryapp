import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from  'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAzv_bxmbETmMOiPVZWuvEP1hulsvQuQ9o',
      authDomain: 'dictionary-98ba5.firebaseapp.com',
      databaseURL: 'https://dictionary-98ba5.firebaseio.com',
      projectId: 'dictionary-98ba5',
      storageBucket: 'dictionary-98ba5.appspot.com',
      messagingSenderId: '587859443710'
};
      firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
