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
        <StatusBar 
          backgroundColor='black'
        />
        <SafeAreaView style={styles.header}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.header}>
              <Text style={styles.headerText}>FIND YOUR REPO</Text>
            </View>
            <View style={styles.spaceBtwn}>
              <MyButton
                onPress={() => this.props.navigation.navigate('Repos')}
                title="Repos"
                color="white"
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
  spaceBtwn: {
    marginTop: 15,
    marginBottom: 15
  },
  header: {
    backgroundColor: 'white'
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#73C2BE',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
