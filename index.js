//Index.io.js - place code in her for IOS

//Import a library to create a component
import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'

//Create a component

const App = () => {
    return(   
        <>
            <Header/>
        </>
    )
}

//Render to device
AppRegistry.registerComponent('albums', () => App)