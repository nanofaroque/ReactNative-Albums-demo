import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './ItemCard';
import CardSection from './CardSection';
import Button from './Button';

// Since this is just a presentation component, we wil go with functional component
const AlbumDetail = ({ record }) => {
    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url 
    } = record;
    const { 
        thumbnailImageStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        converImageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailImageStyle}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={converImageStyle}
                    source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailImageStyle: {
        height: 55,
        width: 55
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    converImageStyle: {
            width: null,
            flex: 1,
            height: 300
    }
};
export default AlbumDetail;
