import React from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

class AlbumList extends React.Component {
    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // console.log('will mount')
    }
    render(){
        return (
            <View>
                <Text>Album List!!</Text>
            </View>
        )
    }
}


export default AlbumList; 