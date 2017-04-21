import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { wordUpdate } from '../actions';
import { CardSection, Input, Inputs } from './common';
import InputWord from './common';


class WordForm extends Component {

  render() {
    const { textStyle } = styles;
    return (
      <View>
                    <Text style={textStyle}> New Word</Text>
              <CardSection>

                <Inputs
                  //label="New Word"
                  placeholder="Enter a Term here"
                  value={this.props.newword}
                  onChangeText={value => this.props.wordUpdate({ prop: 'newword', value })}
                />
              </CardSection>

  <Text style={textStyle}> Definition</Text>
              <CardSection style={{ }}>
                <Inputs
                  //style={{ height: 60}}
                  //label="Definition"
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
  textStyle: {
    fontSize: 18,
    multiline:true,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
  }
};

const mapStateToProps = (state) => {
  const { newword, definition } = state.wordForm;

  return { newword, definition };
};


export default connect(mapStateToProps, { wordUpdate })(WordForm);
