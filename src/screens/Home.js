import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import CoolButton from "../components/CoolButton";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    };
    this.getUserLocStorage();
  }

  getUserLocStorage = async () => {
    try {
      let logUser = await AsyncStorage.getItem("USER");
      let item = JSON.parse(logUser);
      console.log(logUser);
      this.setState({
        ...this.state,
        user: item
      })
      console.log('Hola ' + this.state.user.username)
      ;
    } catch (error) {
      console.log(error);
    }
  };
  

  goToHome = () => {
    console.log("naranja");
    this.props.navigation.navigate('Home');
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state.params.user) {
      this.setState({
        ...this.state,
        user: nextProps.navigation.state.params.user
      })
    }
  }

  render() {
    if (this.state.user !== undefined && this.state.user !== null) {
      return (
        <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View>
            <Text>
              Hola mundo!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
      );
      }
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
