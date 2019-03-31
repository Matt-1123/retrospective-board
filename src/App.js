import React, { Component } from 'react';
import Title from './components/Title';
import Category from './components/Category';
/* FONT AWESOME: */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown, faTrashAlt);

class App extends Component {
  state = {
    wentWell: [],
    toImprove: [],
    actionItems: [],
    wellValue: '',
    improveValue: '',
    actionValue: ''
  }

  // Update the inputValue state on the fly as the user types 
  updateWellValue = e => this.setState({ wellValue: e.target.value });
  updateImproveValue = e => this.setState({ improveValue: e.target.value });
  updateActionValue = e => this.setState({ actionValue: e.target.value });


  // handleSubmit = (e, category) => {
  //   e.preventDefault();
  //   this.setState({ 
  //     [category]: [...this.state[category], this.state.inputValue],
  //     inputValue: ""
  //    });
  // }
  wellSubmit = e => {
    console.log("submitted");
    e.preventDefault();
    this.setState({
      wentWell: [...this.state.wentWell, this.state.wellValue],
      wellValue: ''
    })
  }
  improveSubmit = e => {
    console.log("submitted");
    e.preventDefault();
    this.setState({
      toImprove: [...this.state.toImprove, this.state.improveValue],
      improveValue: ''
    })
  }
  actionSubmit = e => {
    console.log("submitted");
    e.preventDefault();
    this.setState({
      actionItems: [...this.state.actionItems, this.state.actionValue],
      actionValue: ''
    })
  }
  
  render() {
    return (
      <>
        <Title />
        <div className="container">
          <Category 
            name="Went Well" 
            stateName="wentWell" 
            items={this.state.wentWell}
            colorId="wellColor" 
            inputValue={this.state.wellValue}
            updateInput={this.updateWellValue}
            submit={this.wellSubmit}
          />
          <Category 
            name="To Improve" 
            stateName="toImprove"
            items={this.state.toImprove}
            colorId="improveColor"
            inputValue={this.state.improveValue}
            updateInput={this.updateImproveValue}
            submit={this.improveSubmit}
          />
          <Category 
            name="Action Items" 
            stateName="actionItems"
            items={this.state.actionItems}
            colorId="actionColor"
            inputValue={this.state.actionValue}
            updateInput={this.updateActionValue}
            submit={this.actionSubmit}
          />
        </div>
      </>
    );
  }
}

export default App;
