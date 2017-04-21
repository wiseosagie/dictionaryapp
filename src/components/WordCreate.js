import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wordUpdate, wordCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import WordForm from './WordForm';
import { Image } from 'react-native';


class WordCreate extends Component {
  onButtonPress() {
    const { newword, definition } = this.props;

    this.props.wordCreate({ newword, definition });
  }
  render() {

    return (
      <Image source={require('../images/medicc.png')}>
      <Card>
        <WordForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add new Term
          </Button>
        </CardSection>
      </Card>
      </Image>

    );
  }
}


const mapStateToProps = (state) => {
  const { newword, definition } = state.wordForm;

  return { newword, definition };
};

export default connect(mapStateToProps, { wordUpdate, wordCreate })(WordCreate);
