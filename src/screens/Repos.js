import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

// import AsyncStorage from "@react-native-community/async-storage";

import MyButton from '../components/MyButton';
import MyRepoComp from '../components/MyRepoComp';

export default class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      testName: 'Miriam',
    };
  }

  async componentDidMount() {
    try {
      const url = 'https://api.github.com/users/miriloper/repos';
      //https://api.github.com/users/${username}/repos
      const response = await fetch(url);
      const dataAll = await response.json();
      console.log(dataAll)
      this.setState({
        ...this.state,
        data: dataAll,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
        <StatusBar/>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <Text style={styles.headerText}>Welcome!</Text>
            </View>
            <View>
              <Image 
              source={require("../../public/images/githubLogo.png")}
              style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={styles.spaceBtwn}>
              <MyButton
                onPress={() => this.props.navigation.navigate('Home')}
                title="Home"
                color="white"
                accessibilityLabel="Go to home screen"
              />
            </View>
            <MyRepoComp repos={this.state.data}></MyRepoComp>
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
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#fdd32a',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  spaceBtwn: {
    marginTop: 15,
    marginBottom: 15
  }
});
