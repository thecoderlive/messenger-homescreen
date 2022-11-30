import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story_img}
    source={{uri: item.story_img}}
    />
<Text style={styles.name}>{item.name}</Text>
</View>
  );

const Stories = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Stories;

const styles = StyleSheet.create({
    'story_img': {
        'width': '15vw',
        'height': '15vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 15
    },
    'name': {
        'color': '#0b0a0a',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    }
});