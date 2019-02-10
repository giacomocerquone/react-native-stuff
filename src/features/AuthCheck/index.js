import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Text } from 'react-native';

/* import { getToken, getTokenExpiration } from '../../../store/rootReducer';
import { requestNewToken } from '../../actions'; */

export default class AuthCheck extends Component {
  componentDidMount() {
    if (true) {
      if (false) {
        this.props.requestNewToken();
      } else {
        this.props.navigation.navigate('Home');
      }
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return <Text>Loading...</Text>;
  }
}

/*
const mapStateToProps = state => ({
  token: getToken(state),
  tokenExp: getTokenExpiration(state),
});

export default connect(
  mapStateToProps,
  { requestNewToken },
)(authCheckScreen);
*/
