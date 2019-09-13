import React, {Component} from 'react';
import {StyleSheet, Text, Linking, View} from 'react-native';
import { ListItem } from 'react-native-elements'

export default class MyRepoComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  handleClick (url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URL: " + url);
      }
    })
  }

  // this.handleClick
  // {{ source: { uri: el.html_url } }}

  render() {
    return (
      <View>

          {/* <Text>
            holo
          </Text> */}
        
         
          {this.props.repos.map((el, i) => 
            <ListItem button
            onPress={() => this.handleClick(el.html_url)}
            key={i}
            title={el.name}
            bottomDivider
            />
            )}
       
      </View>
    )
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
