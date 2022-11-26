import React, { Component } from "react";
import { connect } from 'react-redux';
import { startVideo } from '../../store/actions/startvideoAC';

import "./index.scss"

class List extends Component {
  loadListVideos(video) {
    return (
      <div className="list__item" onClick={() => this.props.start(video)} key={video.etag}>
        <img className="list__item__thumbnail" src={video.snippet.thumbnails.default.url} alt="" />
        <div className="list__item__title">
          <a href="#"><strong>{video.snippet.title}</strong></a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <aside className="list col-md-3">
        {this.props.videos.map(video => {
          return this.loadListVideos(video)
        })}
      </aside>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    start: (video) => dispatch(startVideo(video))
  }
}

const mapStateToProps = (state => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    error: state.search.error
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)