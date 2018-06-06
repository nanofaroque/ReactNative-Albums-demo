import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Since this is just a presentation component, we wil go with functional component
const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.record.title}</Text>
        </View>
    );

};

export default AlbumDetail;
