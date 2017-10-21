import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {connect} from "react-redux";
import TouchableButton from "../TouchableButton";

class Settings extends Component {

  render() {
    return (<View>
        <Text style={[CoreStyles.center, CoreStyles.text]}>
          Settings
        </Text>
        <TouchableButton onPress={() => this.props.navigation.goBack()}>go back</TouchableButton>
      </View>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
