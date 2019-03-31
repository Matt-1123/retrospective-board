import React, { Component } from 'react';
import Like from './Like';
import Dislike from './Dislike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends Component {
  state = {
    likes: this.props.item.likes,
    dislikes: this.props.item.dislikes
  }

  handleUpvote = () => {
    return this.setState({ likes: this.state.likes + 1 });
  }
  handleDownvote = () => {
    return this.setState({ dislikes: this.state.dislikes + 1 });
  }

  render() {
    return (
      <div className="item">
        {/* LEFT ARROW */}
        <div className={`move-item ${ this.props.colorId }`}>
          <FontAwesomeIcon icon="chevron-left" />
        </div>

        {/* {TEXT AND BUTTONS} */}
        <div className="item-content">
          {/* User Input */}
          <div className="item-text">
            <p>{this.props.item}</p>
          </div>

          <div className="item-actions">
            <div className="item-action-icon">
              {/* <Like /> */}
              <button onClick={this.handleUpvote}>
                <FontAwesomeIcon icon="thumbs-up" />
              </button>
              <span> {this.state.likes}</span>
            </div>
            <div className="item-action-icon">
              {/* <Dislike /> */}
              <button onClick={this.handleDownvote}>
                <FontAwesomeIcon icon="thumbs-down" />
              </button>
              <span> {this.state.dislikes}</span>
            </div>
            <div className="item-action-icon">
              <button onClick={() => this.props.delete(this.props.index)}>
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <div className={`move-item ${ this.props.colorId }`}>
          <FontAwesomeIcon icon="chevron-right" />
        </div>
      </div>
    )
  }
}

export default Item;
