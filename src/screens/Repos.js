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
      avatarUrl: require("../../public/images/githubLogo.png")
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

  checkForUser() {
    console.log(this.state)
    if (this.state.data.length == 0) {
      return "loading...";
    }
    else if (this.state.data == null) {
      return "Repos is empty";
    }
    else {
      return this.state.data[0].owner.login;
    }
  }

  manageAvatar() {
    console.log(this.state)
    if (this.state.data.length == 0) {
      return require("../../public/images/githubLogo.png");
    }
    else if (this.state.data == null) {
      return require("../../public/images/githubLogo.png");
    }
    else {
      return { uri: this.state.data[0].owner.avatar_url};
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
            <View style={styles.header}>
              <Image 
              source={ this.manageAvatar() }
              style={styles.roundAvatar}
              />
              <Text style={styles.textAvatar}>
                {this.checkForUser()}
              </Text>
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
  header: {
    alignItems: 'center'
  },
  headerText: {
    marginTop: 13,
    marginBottom: 10,
    color: '#fdd32a',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  spaceBtwn: {
    marginTop: 15,
    marginBottom: 15
  },
  roundAvatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden'
  },
  textAvatar: {
    fontFamily: 'monospace',
    color: '#0d0906',
    fontSize: 15,
    textAlign: 'center',
    display: 'flex',
    marginTop: 10
  }
});
