import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends Component {
  state = {
    likes: this.props.likes,
    dislikes: this.props.dislikes
  }

  handleUpvote = () => {
    console.log('liked');
    return this.setState({ likes: this.state.likes + 1 });
  }

  handleDownvote = () => {
    console.log("disliked")
    return this.setState({ dislikes: this.state.dislikes + 1 });
  }
  
  render() {
    return (
      <div className="item">
        <div className="move-item">
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <div className="item-content">
          <div className="item-text">
            <p>{this.props.text}</p>
          </div>
          <div className="item-actions">
            <div className="item-action-icon">
              <button onClick={this.handleUpvote}>
                <FontAwesomeIcon icon="thumbs-up" />
              </button>
              <span> {this.state.likes}</span>
            </div>
            <div className="item-action-icon">
              <button onClick={this.handleDownvote}>
                <FontAwesomeIcon icon="thumbs-down" />
              </button>
              <span> {this.state.dislikes}</span>
            </div>
            <div className="item-action-icon">
              <button onClick={this.props.handleDelete}>
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </div>
          </div>
        </div>
        <div className="move-item">
          <FontAwesomeIcon icon="chevron-right" />
        </div>
      </div>
    )
  }
}

export default Item;
