import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './ItemCard';
import CardSection from './CardSection';

// Since this is just a presentation component, we wil go with functional component
const AlbumDetail = ({ record }) => {
    const { title, artist, thumbnail_image } = record;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style={styles.thumbnail_image_style}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnail_image_style: {
        height: 55,
        width: 55
    }
};
export default AlbumDetail;
