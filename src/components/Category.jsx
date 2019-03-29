import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
  state = {
    inputValue: '',
    items: []
  }
  
  // Add new item to 'items' state and reset inputValue state
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      items: [...this.state.items, this.state.inputValue],
      inputValue: ""
     });
  }

  // Update the inputValue state on the fly as the user types 
  updateInputValue = e => this.setState({ inputValue: e.target.value });

  // handleUpvote = () => {
  //   console.log('liked');
  //   return this.setState({ likes: this.state.likes + 1 });
  // }
  // handleDownvote = () => {
  //   console.log("disliked")
  //   return this.setState({ dislikes: this.state.dislikes + 1 });
  // }

  // Remove clicked item (filtered out by index)
  handleDelete = deleteIndex => {
    const items = this.state.items.filter((item, index) => {
      return deleteIndex !== index;
    });
    this.setState({ items });
  }
  
  render() {
    return (
      <div className="category">
        <h2>{this.props.name}</h2>

        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Enter note here"
            value={this.state.inputValue} 
            onChange={e => this.updateInputValue(e)}
          />
          <button type="submit" className={this.props.colorId}>Submit</button>
        </form> 

        {/* Map out all items in state */}
        {this.state.items.length > 0 ? 
          this.state.items.map((item, index) => {
            return (<Item 
              key={`item-${index}`} 
              // key={Math.random()} NO... CHANGES EVERY RENDER
              index={index}
              delete={this.handleDelete}
              text={item}
              colorId={this.props.colorId}
            />);
          }) : <h3>Nothing here</h3>
        }
      </div>
    )
  }
}

export default Category;