import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends Component {

  render() {
    return (
      <div className="item">
        {/* LEFT ARROW */}
        <div 
          className={`move-item ${ this.props.colorId }`}
          onClick={() => this.props.moveLeft(this.props.index)}
        >
          <FontAwesomeIcon icon="chevron-left" />
        </div>

        {/* {TEXT AND BUTTONS} */}
        <div className="item-content">
          {/* User Input */}
          <div className="item-text">
            {/* <p>{this.props.item.value}</p> */}
            <textarea
              onChange={e => this.props.textUpdate(e, this.props.index)}
            >
              {this.props.item.value}
            </textarea>
          </div>

          <div className="item-actions">
            <div className="item-action-icon">
              <button onClick={() => this.props.upvote(this.props.index)}>
                <FontAwesomeIcon icon="thumbs-up" />
              </button>
              <span> {this.props.item.likes}</span>
            </div>
            <div className="item-action-icon">
              <button onClick={() => this.props.downvote(this.props.index)}>
                <FontAwesomeIcon icon="thumbs-down" />
              </button>
              <span> {this.props.item.dislikes}</span>
            </div>
            <div className="item-action-icon">
              <button onClick={() => this.props.delete(this.props.index)}>
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <div 
          className={`move-item ${ this.props.colorId }`}
          onClick={() => this.props.moveRight(this.props.index)}
        >
          <FontAwesomeIcon icon="chevron-right" />
        </div>
      </div>
    )
  }
}

export default Item;
