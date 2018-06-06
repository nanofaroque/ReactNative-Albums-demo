import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        console.log('component will mount in albumlist ');
        this.fetchData();
    }
    fetchData() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            console.log(response);
        });
      }
    render() {
    return (
        <View>
            <Text>Album List !!</Text>
        </View>
    );
}

}

module.exports = AlbumList;
