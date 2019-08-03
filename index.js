//Index.io.js - place code in her for IOS

//Import a library to create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

//Create a component

const App = () => {
    return(   
        <View> 
            <Header headerText = {'Albums'}/>
            <AlbumList />
        </View>
    
    )
}

//Render to device
AppRegistry.registerComponent('albums', () => App)