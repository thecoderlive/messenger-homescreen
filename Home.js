import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Stories from './Stories'
import Messages from './Messages'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Stories item={item.stories}/>
<Messages item={item.messages}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});