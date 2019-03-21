import React, { Component } from 'react';
import Title from './components/Title';
import Category from './components/Category';
/* FONT AWESOME: */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown, faTrashAlt);

class App extends Component {
  render() {
    return (
      <>
        <Title />
        <div className="container">
          <Category name="Went Well" placeholder="What went well?"/>
          <Category name="To Improve" placeholder="What can be improved?"/>
          <Category name="Action Items" placeholder="What needs to be done?"/>
        </div>
      </>
    );
  }
}

export default App;
