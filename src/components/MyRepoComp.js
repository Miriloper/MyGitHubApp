import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MyRepoComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const url = 'https://api.github.com/users/miriloper/repos';
    //https://api.github.com/users/${username}/repos
    const response = await fetch(url);
    const dataAll = await response.json();
    this.setState({
      ...this.state,
      data: dataAll
    })
    console.log('apple')
    console.log(this.data);
  }

  //data.[].name
  //data.[].html_url

  render() {
    return (
      <View>
        <Text>
          {this.props.repos.map((el, index) => {
          
            return (
              d
            )

          })}
        </Text>
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
