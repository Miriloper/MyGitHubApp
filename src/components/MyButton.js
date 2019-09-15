import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.text}> {this.props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fdd32a',
    padding: 20,
    borderRadius: 18,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    width: 300
  },

  text: {
    color: '#0d0906',
    fontFamily: 'Mark-Regular',
    fontSize: 18
  },
});
