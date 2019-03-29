import React, { Component } from 'react';
import Title from './components/Title';
import Category from './components/Category';
/* FONT AWESOME: */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown, faTrashAlt);

class App extends Component {
  // state = {
  //   wentWell: [],
  //   toImprove: [],
  //   actionItems: [],
  //   inputValue: '',
  // }

  // Update the inputValue state on the fly as the user types 
  // updateInputValue = e => {
  //   this.setState({
  //     inputValue: e.target.value
  //   });
  // }
  
  render() {
    return (
      <>
        <Title />
        <div className="container">
          <Category name="Went Well" colorId="wellColor"/>
          <Category name="To Improve" colorId="improveColor"/>
          <Category name="Action Items" colorId="actionColor"/>
        </div>
      </>
    );
  }
}

export default App;
