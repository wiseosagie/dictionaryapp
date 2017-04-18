import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import wordList from './components/wordList';
import WordCreate from './components/WordCreate';
import WordEdit from './components/WordEdit';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main" >
        <Scene
        onRight={() => Actions.wordCreate()}
        rightTitle="Add"
        key="wordList"
        component={wordList}
        title="Find Words"  />

        <Scene key="wordCreate" component={WordCreate} title="Enter new words" />

        <Scene key="wordEdit" component={WordEdit} title="Edit Terms" />

      </Scene>
    </Router>
  );
};

export default RouterComponent;
