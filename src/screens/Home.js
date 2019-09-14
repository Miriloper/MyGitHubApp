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
              <Text style={styles.headerText}>Find your repo</Text>
              <Image
                source={require('../../public/images/githubLogo.png')}
                style={{width: 200, height: 200}}
              />
              <MyButton
                onPress={() => this.props.navigation.navigate('Repos')}
                title="Repos"
                style={styles.homeButton}
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
    backgroundColor: 'transparent'
  },
  header: {
    backgroundColor: '#f6f6f4', //'#f8b600'
    alignItems: 'center',
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#fdd32a',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  homeButton: {
    backgroundColor: 'red'
  }
});
