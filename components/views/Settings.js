import React, {Component} from 'react';
import {View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {connect} from "react-redux";
import TouchableButton from "../TouchableButton";
import {DEFAULT_DATA} from "../../helper/defaultData";
import {updateDeck} from "../../helper/api";

class Settings extends Component {

  generateDefaultData = () => {
    updateDeck(DEFAULT_DATA.items, DEFAULT_DATA.deckName);
  };

  render() {
    return (<View>
        <TouchableButton style={CoreStyles.primaryButton} onPress={this.generateDefaultData}>Add Default Data</TouchableButton>
        <TouchableButton style={CoreStyles.primaryButton} onPress={() => this.props.navigation.goBack()}>To Home</TouchableButton>
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
