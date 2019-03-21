import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
  state = {
    inputValue: '',
    items: []
  };
  
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.inputValue);
    this.setState({ items: this.state.items.concat(this.state.inputValue) })
    this.setState({ inputValue: "" })
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  
  render() {
    return (
      <div className="category">
        <h2>{this.props.name}</h2>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)}/>
          <button type="submit">Submit</button>
        </form> 
        {/* Enter all items: */}
        {this.state.items.length > 0 ? 
          this.state.items.map(item => {
            return <Item text={item}/>
          }) : <p>There are no items here.</p>
        }
      </div>
    )
  }
}

export default Category;