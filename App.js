import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>Touch Here</Text>
        </TouchableHighlight>
        <View>
          <Text>{this.state.count}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);
