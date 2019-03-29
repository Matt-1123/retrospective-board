import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dislike extends Component {
  state = {
    dislikes: 0
  }

  handleDownvote = () => {
    return this.setState({ dislikes: this.state.dislikes + 1 });
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleDownvote}>
          <FontAwesomeIcon icon="thumbs-down" />
        </button>
        <span> {this.state.dislikes}</span>
      </>
    )
  }
}

export default Dislike;