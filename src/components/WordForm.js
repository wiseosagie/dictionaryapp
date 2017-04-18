import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { wordUpdate } from '../actions';
import { CardSection, Input } from './common';

class WordForm extends Component {
  render() {
    return (
      <View>
              <CardSection>
                <Input
                  label="New Word"
                  placeholder="Enter a Term here"
                  value={this.props.newword}
                  onChangeText={value => this.props.wordUpdate({ prop: 'newword', value })}
                />
              </CardSection>


              <CardSection style={{ }}>
                <Input
                  style={{ height: 60}}
                  label="Definition"
                  placeholder="This is ....."
                  value={this.props.definition}

                  onChangeText={value => this.props.wordUpdate({ prop: 'definition', value })}
                />
              </CardSection>

      </View>
    )
  }
}
const styles = {
  definitionStyle: {
    fontSize: 12,
    multiline:true
  }
};

const mapStateToProps = (state) => {
  const { newword, definition } = state.wordForm;

  return { newword, definition };
};


export default connect(mapStateToProps, { wordUpdate })(WordForm);
