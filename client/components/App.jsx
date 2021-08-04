import React from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

import VideoPlayer from './VideoPlayer'
import FilePicker from './FilePicker'

import { play, pause } from '../actions'


const url = 'http://come-watch-with-me.herokuapp.com'
// const url = 'http://localhost:8080'

const socket = io(url)


class App extends React.Component {

  componentDidMount(){
    this.initSockets()
  }

  initSockets = () => {
    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('disconnect', () => {
      console.log('connection to websocket server was lost')
    })

    socket.on('play', () => {
      this.props.dispatch(play())
    })

    socket.on('pause', () => {
      this.props.dispatch(pause())
    })
  }
  
  togglePlay = () => {
    if (this.props.playing) {
      socket.emit('pause')
    } else {
      socket.emit('play')
    }
  }

  render() {
    return (
      <>
        <h1 onClick={this.togglePlay}>
          HI :D - {this.props.playing ? 'PAUSE' : 'PLAY'}
        </h1>
        <VideoPlayer />
        <FilePicker />
      </>
    )
  }
}

function mapState2Props (state) {
  return {
    playing: state.playing
  }
}

export default connect(mapState2Props)(App)
