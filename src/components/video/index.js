import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import "./index.scss"

class Video extends Component {
  render() {
    return (
      <main className="main col-md-8">
        <div className="video">
          {
            !this.props.video && (
              <h2>Select a video to watch!</h2>
            )
          }

          {
            this.props.video && (
              <ReactPlayer 
                url={"https://www.youtube.com/watch?v=" 
                + this.props.video.id.videoId} 
                width='100%' height='450px' />
            )
          }
        </div>
      </main>
    )
  }
};

const mapStateToProps = (state => {
  return {
    videos: state.startVideo.video
  }
})

export default connect(mapStateToProps, null)(Video)