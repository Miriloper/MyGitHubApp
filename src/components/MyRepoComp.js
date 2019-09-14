import React, {Component} from 'react';
import {StyleSheet, Text, Linking, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

export default class MyRepoComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleClick(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URL: " + url);
      }
    });
  }

  render() {
    return (
      <View>
        {this.props.repos.map((el, i) => (
          <ListItem
            button
            onPress={() => this.handleClick(el.html_url)}
            key={i}
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95} //
            linearGradientProps={{
              colors: ['#73EEDC', '#776885'],
              start: {x: 1, y: 0},
              end: {x: 0.2, y: 0},
            }}
            ViewComponent={LinearGradient}
            title={el.name}
            bottomDivider
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: 'white',
  },
});
