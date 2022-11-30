import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const messagesItem = ({ item }) => (
<View style={styles.messages_item}>
<Image
    style={styles.profile_pic}
    source={{uri: item.profile_pic}}
    />
<Text style={styles.friend_name}>{item.friend_name}</Text>
<Text style={styles.last_message}>{item.last_message}</Text>
</View>
  );

const Messages = ({ item }) => (
<FlatList
    style={styles.messages}
    data={item}
    renderItem={messagesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Messages;

const styles = StyleSheet.create({
    'profile_pic': {
        'width': '15vw',
        'height': '15vw',
        'marginTop': 20,
        'borderRadius': 50,
        'marginLeft': 15
    },
    'friend_name': {
        'color': '#0b0a0a',
        'fontSize': 15,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'last_message': {
        'color': '#080707',
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});