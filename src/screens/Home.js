import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Header,
  StatusBar,
} from 'react-native';

// import AsyncStorage from "@react-native-community/async-storage";

import MyButton from '../components/MyButton';

import { NativeModules } from 'react-native';
const { ToastModule } = NativeModules;

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="black" />
        <SafeAreaView style={styles.header}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            //fillViewport="true"
            style={styles.scrollView}>
            <View style={styles.header}>
              <Text style={styles.headerText}>GitHubMe</Text>
              <Image
                source={require('../../public/images/githubLogo.png')}
                style={{width: 200, height: 200}}
              />
            </View>
            <View style={styles.homeButton}>
              <TextInput
                onChangeText={(event) => this.setState({...this.state, username: event.toLowerCase()})}
                placeholder="GitHub username (f.e. Miriloper)"
                style={styles.input}
              />
              <MyButton
                
                
                onPress={() => {if (this.state.username.length > 0) {
                  this.props.navigation.navigate('Repos', {username: this.state.username })
                  //this.props.navigation.navigate('Repos')
                } else {
                ToastModule.show('GitHub username needed', ToastModule.LENGTH_SHORT);
                }}}
                title="Repos"
                accessibilityLabel="Go to repos screen"
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
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: '#f6f6f4', //'#f8b600'
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#0d0906',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Mark-Regular',
    marginBottom: 20,
    marginTop: 30,
  },
  homeButton: {
    marginTop: 50,
    alignItems: 'center'
  },

  input: {
    width: 300,
    height: 38,
    padding: 4,
    fontSize: 16,
    color: '#585655',
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#E7E6E6',

  }
});
