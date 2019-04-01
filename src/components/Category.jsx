import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
  state = {
    items: this.props.items
  }

  // updateItems = () => this.setState({ items: this.props.items })
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.items !== prevProps.items) this.updateItems();
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.items !== prevState.items){
      return ({ items: nextProps.items }) // <- this is setState equivalent
    }
  }
  
  
  // Remove clicked item (filtered out by index)
  // handleDelete = deleteIndex => {  
  //   const items = this.state.items.filter((item, index) => {
  //     console.log(`item: ${item} ${deleteIndex} : ${index}`);
  //     return deleteIndex !== index;
  //   });
  //   this.setState({ items });
  // }
  
  render() {
    return (
      <div className="category">
        <h2>{this.props.name}</h2>

        {/* ------ FORM (INPUT AND SUBMIT BUTTON) ------ */}
        <form onSubmit={e => this.props.submit(e)}>
          <input 
            placeholder="Enter note here"
            value={this.props.inputValue} 
            onChange={e => this.props.updateInput(e)}
          />
          <button type="submit" className={this.props.colorId}>Submit</button>
        </form> 

        {/* ------ MAPPED OUT ITEMS ------ */}
        {this.state.items.length > 0 ? 
          this.state.items.map((item, index) => {
            return (<Item 
              key={`item-${index}`} 
              index={index}
              delete={this.props.delete}
              upvote={this.props.upvote}
              downvote={this.props.downvote}
              item={item}
              colorId={this.props.colorId}
              moveLeft={this.props.moveLeft}
              moveRight={this.props.moveRight}
            />);
          }) : <h3>(Nothing here)</h3>
        }
      </div>
    )
  }
}

export default Category;