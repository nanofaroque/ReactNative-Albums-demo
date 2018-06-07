import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} record={album} />); 
        //passing album as a prop to detail name record
    }
    render() {
        console.log(this.state);
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
}

}

module.exports = AlbumList;
