import React, {Component} from 'react';
import {Switch, Text, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {StyleSheet} from 'react-native';
import {connect} from "react-redux";
import TouchableButton from "../TouchableButton";
import {DEFAULT_DATA} from "../../helper/defaultData";
import {updateDeck} from "../../helper/api";
import {
  clearLocationNotification, getLocalNotificationMode, setLocalNotification,
  setLocalNotificationMode
} from "../../helper/notification";
import {addData} from "../../actions/";

class Settings extends Component {

  state = {
    ready: false,
    localNotification: true
  };

  componentDidMount() {
    getLocalNotificationMode()
      .then((mode) => {
        this.setState({
          ready: true,
          localNotification: mode
        })
      })
  }

  handleNNotificationChange = (value) => {
    this.setState((state) => ({
      localNotification: value
    }));
    setLocalNotificationMode(value);
    if (value) {
      setLocalNotification();
    } else {
      clearLocationNotification();
    }
  };


  generateDefaultData = () => {
    const {deckName, items} = DEFAULT_DATA;
    updateDeck(items, deckName);
    this.props.addData(deckName, items)
  };

  render() {
    const {localNotification, ready} = this.state;
    return (<View>
        <Text style={CoreStyles.text}>Settings</Text>
        <View style={styles.switchContainer}>
          <Text style={CoreStyles.textMinor}>Local notifications</Text>
          {ready && <Switch onValueChange={this.handleNNotificationChange} value={localNotification}/>}
        </View>
        <TouchableButton style={CoreStyles.primaryButton} onPress={this.generateDefaultData}>Add Default
          Data</TouchableButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
});


function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addData: (deckName, items) => dispatch(addData(deckName, items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
