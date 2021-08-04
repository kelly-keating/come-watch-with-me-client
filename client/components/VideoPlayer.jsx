import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'


class VideoPlayer extends React.Component {

  renderVideo = () => {
    return <ReactPlayer className="player" playing={this.props.playing} url={"videos/" + this.props.video} />
  }

  render () {
    return <>
      <h2>VIDEO</h2>
      {this.props.video && this.renderVideo()}
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
