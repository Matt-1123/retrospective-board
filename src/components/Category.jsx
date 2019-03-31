import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
  state = {
    // userInput: this.props.inputValue,
    // items: []
    // inputValue: "",
    // items: this.props.items.map(item => ({ item, likes: 0, dislikes: 0 }))
  }
  
  // Add new item to items and reset inputValue state
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.setState({ 
  //     items: [...this.state.items, {value: this.state.inputValue, likes: 0, dislikes: 0}],
  //     inputValue: "",
  //     likes: 0,
  //     dislikes: 0
  //    });
  // }

  // Update the inputValue state on the fly as the user types 
  //updateInputValue = e => this.setState({ inputValue: e.target.value });

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
      console.log(`item: ${item} ${deleteIndex} : ${index}`);
      return deleteIndex !== index;
    });
    this.setState({ items });
  }
  
  render() {
    return (
      <div className="category">
        <h2>{this.props.name}</h2>

        <form onSubmit={e => this.props.submit(e)}>
          <input 
            placeholder="Enter note here"
            value={this.props.inputValue} 
            onChange={e => this.props.updateInput(e)}
          />
          <button type="submit" className={this.props.colorId}>Submit</button>
        </form> 

        {/* Map out all items */}
        {this.props.items.length > 0 ? 
          this.props.items.map((item, index) => {
            return (<Item 
              key={`item-${index}`} 
              // key={Math.random()} NO... CHANGES EVERY RENDER
              index={index}
              delete={this.handleDelete}
              item={item}
              colorId={this.props.colorId}
            />);
          }) : <h3>Nothing here</h3>
        }
      </div>
    )
  }
}

export default Category;