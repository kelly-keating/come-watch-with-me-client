import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'


class VideoPlayer extends React.Component {

  render () {
    return <>
      <h2>VIDEO</h2>
      <ReactPlayer playing={this.props.playing} url={this.props.video} />
    </>
  }
}

function mapState2Props (state) {
  return {
    playing: state.playing,
    video: state.video,
  }
}

export default connect(mapState2Props)(VideoPlayer)
