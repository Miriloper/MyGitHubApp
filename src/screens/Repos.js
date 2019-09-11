import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from "react-native";

// import AsyncStorage from "@react-native-community/async-storage";

import MyButton from "../components/MyButton";

export default class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    };
  }

  render() {
    
      return (
        <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View>
            <Text>
              Hola soy repos!
            </Text>
            </View>
          <View>
            <MyButton
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Home"
                    color="white"
                    accessibilityLabel="Go to home screen"
                  />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
      );
      
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'purple',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
