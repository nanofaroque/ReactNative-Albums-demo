import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // This is just initial state. we need to update this by calling setState() method
    state = {
        albums : []
    }
    componentWillMount() {
        console.log('component will mount in albumlist ');
        this.fetchData();
    }
    fetchData() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data });
        });
      }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }
    render() {
        console.log(this.state);
    return (
        <View>
            {this.renderAlbums()}
        </View>
    );
}

}

module.exports = AlbumList;
