import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Like extends Component {
  state = {
    likes: 0
  }

  handleUpvote = () => {
    return this.setState({ likes: this.state.likes + 1 });
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleUpvote}>
          <FontAwesomeIcon icon="thumbs-up" />
        </button>
        <span> {this.state.likes}</span>
      </>
    )
  }
}

export default Like;
