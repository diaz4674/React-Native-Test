import React from 'react'
import {View} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends React.Component {

    state = {
        albums: []
    }

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                this.setState({albums: res.data})
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    renderAlbums() {
        return this.state.albums.map((album, index) => 
            <AlbumDetail key = {index} album={album}/> 
        )
    }
    render(){

        console.log(this.state)
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}


export default AlbumList; 