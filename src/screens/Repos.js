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

const sortTypes = {
  byName: 'Name',
  byUpdate: 'Update',
  bySize: 'Size',
};

export default class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      testName: 'Miriam',
      avatarUrl: require('../../public/images/githubLogo.png'),
      sortType: sortTypes.byName,
    };
  }

  async componentDidMount() {
    try {
      const url = 'https://api.github.com/users/miriloper/repos';
      //https://api.github.com/users/${username}/repos
      const response = await fetch(url);
      const dataAll = await response.json();
      console.log(dataAll);
      this.setState({
        ...this.state,
        data: dataAll,
      });
    } catch (error) {
      console.log(error);
    }
  }

  checkForUser() {
    if (this.state.data.length == 0) {
      return 'loading...';
    } else if (this.state.data == null) {
      return 'Repos is empty';
    } else {
      return this.state.data[0].owner.login;
    }
  }

  manageAvatar() {
    if (this.state.data.length == 0) {
      return require('../../public/images/githubLogo.png');
    } else if (this.state.data == null) {
      return require('../../public/images/githubLogo.png');
    } else {
      return {uri: this.state.data[0].owner.avatar_url};
    }
  }

  sortManager() {
    let nextSort = null;
    let sortedData = null;
    switch (this.state.sortType) {
      case sortTypes.byName:
        sortedData = this.sortedDataByUpdate();
        nextSort = sortTypes.byUpdate;
        break;
      case sortTypes.byUpdate:
        sortedData = this.sortedDataBySize();
        nextSort = sortTypes.bySize;
        break;
      case sortTypes.bySize:
        sortedData = this.sortedDataByName();
        nextSort = sortTypes.byName;
        break;
    }
    if(nextSort && sortedData) {
      this.setState({
        ...this.state,
        sortType: nextSort,
        data: sortedData,
      });
    } else {
      console.log("Error: unknown sort type.")
    }
  }

  sortedDataByName() {
    let sortedData = [...this.state.data];
    sortedData.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
    return sortedData;
  }

  sortedDataByUpdate() {
    let sortedData = [...this.state.data];
    sortedData.sort((a, b) => {
      let aDate = new Date(a.updated_at)
      let bDate = new Date(b.updated_at)
      return bDate - aDate;
    });
    return sortedData;
  }

  sortedDataBySize() {
    let sortedData = [...this.state.data];
    sortedData.sort((a, b) => {
      return b.size - a.size;;
    });
    return sortedData;
  }

  render() {
    return (
      <Fragment>
        <StatusBar />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <Text style={styles.headerText}>Welcome!</Text>
            </View>
            <View style={styles.header}>
              <Image source={this.manageAvatar()} style={styles.roundAvatar} />
              <Text style={styles.textAvatar}>{this.checkForUser()}</Text>
            </View>
            <View style={styles.spaceBtwn}>
              <MyButton
                onPress={() => this.sortManager()}
                title={'Sorted by ' + this.state.sortType}
                accessibilityLabel="Sorted by Name/Update/Size"
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
    alignItems: 'center',
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
    marginBottom: 15,
    flexDirection: 'row',
  },
  roundAvatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
  },
  textAvatar: {
    fontFamily: 'monospace',
    color: '#0d0906',
    fontSize: 15,
    textAlign: 'center',
    display: 'flex',
    marginTop: 10,
  },
});
