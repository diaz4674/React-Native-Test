//Index.io.js - place code in her for IOS

//Import a library to create a component
import React from 'react'
import { Text, AppRegistry } from 'react-native'

//Create a component

const App = () => {
    return(   
        <Text>OMG it works!</Text>
    )
}

//Render to device
AppRegistry.registerComponent('albums', () => App)