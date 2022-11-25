import React, { Component } from "react";
import "./index.scss"

class List extends Component {
  render() {
    return (
      <aside className="list col-md-3">
        <div className="list__item">
          <a className="list__item__thumbnail" href="#">
            <img src="https://kp-blog.s3.amazonaws.com/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-%C3%A9-8-dicas-de-como-fazer-e-principais-ferramentas.jpg" />
          </a>
          <div className="list__item__title">
            <a href="#"><strong>Video Title</strong></a>
          </div>
        </div>
        <div className="list__item">
          <a className="list__item__thumbnail" href="#">
            <img src="https://kp-blog.s3.amazonaws.com/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-%C3%A9-8-dicas-de-como-fazer-e-principais-ferramentas.jpg" />
          </a>
          <div className="list__item__title">
            <a href="#"><strong>Video Title</strong></a>
          </div>
        </div>
        <div className="list__item">
          <a className="list__item__thumbnail" href="#">
            <img src="https://kp-blog.s3.amazonaws.com/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-%C3%A9-8-dicas-de-como-fazer-e-principais-ferramentas.jpg" />
          </a>
          <div className="list__item__title">
            <a href="#"><strong>Video Title</strong></a>
          </div>
        </div>
        <div className="list__item">
          <a className="list__item__thumbnail" href="#">
            <img src="https://kp-blog.s3.amazonaws.com/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-%C3%A9-8-dicas-de-como-fazer-e-principais-ferramentas.jpg" />
          </a>
          <div className="list__item__title">
            <a href="#"><strong>Video Title</strong></a>
          </div>
        </div>
      </aside>
    )
  }
};

export default List