import React, {Component} from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from "@expo/vector-icons/Entypo";

// noinspection JSUnusedLocalSymbols
class HamburgerMenu extends Component {
  handleMenuPress = () => {
    this.props.navigation.navigate('DrawerToggle');
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handleMenuPress}>
        <Entypo style={styles.icon} name="dots-three-vertical" size={24}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default HamburgerMenu
