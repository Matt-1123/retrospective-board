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
    actionItems: []
  }
  
  render() {
    return (
      <>
        <Title />
        <div className="container">
          <Category name="Went Well" items={this.state.wentWell} />
          <Category name="To Improve" items={this.state.toImprove} />
          <Category name="Action Items" items={this.state.actionItems} />
        </div>
      </>
    );
  }
}

export default App;
