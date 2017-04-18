import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordForm from './WordForm';
import { wordUpdate, wordSave, wordDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';


class WordEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.words, (value, prop) => {
      this.props.wordUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { newword, definition } = this.props;

    this.props.wordSave({ newword, definition, uid: this.props.words.uid })
  }

  onAccept() {
    const { uid } = this.props.words;

    this.props.wordDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <WordForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Word
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { newword, definition } = state.wordForm;

  return { newword, definition };
};

export default connect(mapStateToProps, {wordUpdate, wordSave, wordDelete })(WordEdit);
