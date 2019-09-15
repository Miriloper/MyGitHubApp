import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Header,
  StatusBar,
} from 'react-native';

// import AsyncStorage from "@react-native-community/async-storage";

import MyButton from '../components/MyButton';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined,
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
              <MyButton
                onPress={() => this.props.navigation.navigate('Repos')}
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
    flex: 1
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#0d0906',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Mark-Regular',
    marginBottom: 50,
    marginTop: 30
  },
  homeButton: {
    marginTop: 50
  }
});
