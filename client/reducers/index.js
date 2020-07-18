import { combineReducers } from 'redux'

import playing from './playing'
import video from './video'


export default combineReducers({
  playing,
  video,
})