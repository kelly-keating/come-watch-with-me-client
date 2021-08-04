import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { getFiles } from '../api'
import { setVideo } from '../actions'


class FilePicker extends React.Component {

  state = {
    files: [],
    loading: true,
  }

  componentDidMount = () => {
    this.refresh()
  }

  refresh = () => {
    getFiles()
      .then(files => {
        const newState = { loading: false }
        if (files != undefined) newState.files = files
        this.setState(newState)
      })
  }

  renderFiles = (files) => {
    return files.map((file, i) => (
      <p key={i} onClick={() => this.props.dispatch(setVideo(file))}>
        {file}
      </p>
    ))
  }

  render () {
    const {files, loading} = this.state
    return <>
      <h2>FILE PICKER</h2>
      {/* {this.state.loading && "LOADING"} */}
      {this.renderFiles(files)}
      {( !loading && !files.length ) && "NO FILES IN FOLDER"}
    </>
  }
}

export default connect()(FilePicker)
