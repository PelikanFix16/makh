import React from "react";
import { Button, Text, View } from "react-native";
import MapView from "react-native-maps";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Maps"
  };

  render() {
    return <MapView style={{ flex: 1 }} />;
  }
}

export default ProfileScreen;