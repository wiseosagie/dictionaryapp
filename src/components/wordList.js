import _ from 'lodash';
import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { wordFetch } from '../actions';
import ListItem from './ListItem';

class wordList extends Component {
  componentWillMount() {
    this.props.wordFetch();

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);

  }
  createDataSource({ word }){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(word);

  }

  renderRow(words) {
    return <ListItem words={words} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const word = _.map(state.word, (val, uid) => {
    return { ...val, uid };
  });
  return { word };

};

export default connect(mapStateToProps, { wordFetch })(wordList);
