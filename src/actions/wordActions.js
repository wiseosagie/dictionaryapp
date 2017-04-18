import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  WORD_UPDATE,
  WORD_CREATE,
  WORD_FETCH_SUCCESS,
  WORD_SAVE_SUCCESS
} from './types';

export const wordUpdate = ({ prop, value }) => {
  return {
    type: WORD_UPDATE,
    payload: { prop, value }
  };
};


export const wordCreate = ({ newword, definition }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/words`)
    .push({ newword, definition })
    .then(() => {
      dispatch({ type: WORD_CREATE});
      Actions.wordList({ type: 'reset' })
  });
  };
};

export const wordFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/words`)
      .on('value', snapshot => {
        dispatch({ type: WORD_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const wordSave = ({ newword, definition, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/words/${uid}`)
    .set({ newword, definition })
    .then(() => {
      dispatch({ type: WORD_SAVE_SUCCESS });
      Actions.wordList({ type: 'reset' });
    });
  }
};

export const  wordDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/words/${uid}`)
      .remove()
      .then(() => {
        Actions.wordList({ type: 'reset' });
      });
  };
};
