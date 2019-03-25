import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
  state = {
    inputValue: '',
    items: this.props.items,
    // TODO: Move likes and dislikes to this state from Item component
    likes: 0,
    dislikes: 0
  };
  
  // Add new item to 'items' state and reset inputValue state
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ items: [...this.state.items, this.state.inputValue] });
    this.setState({ inputValue: "" });
  }

  // Update the inputValue state on the fly as the user types 
  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  // handleUpvote = () => {
  //   console.log('liked');
  //   return this.setState({ likes: this.state.likes + 1 });
  // }

  // handleDownvote = () => {
  //   console.log("disliked")
  //   return this.setState({ dislikes: this.state.dislikes + 1 });
  // }

  // Remove the item with the same index as the item the user clicks delete on
  handleDelete = index => {
    const newItems = this.state.items.filter((item, i) => {
      return index !== i;
    });
    return this.setState({ items: newItems });
  }
  
  render() {
    return (
      <div className="category">
        <h2>{this.props.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)}/>
          <button type="submit">Submit</button>
        </form> 
        {/* Map out all items in state: */}
        {this.state.items.length > 0 ? 
          this.state.items.map((item, index) => {
            const key = index;
            return <Item 
              key={key} 
              text={item} 
              upvote={this.handleUpvote}
              downvote={this.handleDownvote}
              likes={this.state.likes}
              dislikes={this.state.dislikes}

              // TODO: figure out if this is the right way to invoke handleDelete
              handleDelete={this.handleDelete.bind(this, index)}
            />
          }) : <p>There are no items here.</p>
        }
      </div>
    )
  }
}

export default Category;