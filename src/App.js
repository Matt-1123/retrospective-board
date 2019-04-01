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

  // -------- MOVING ITEMS BETWEEN CATEGORIES --------
  wellMoveLeft = (moveIndex) => {
    const item = this.state.wentWell[moveIndex];
    const wentWell = this.state.wentWell.filter((item, index) => {
      return moveIndex !== index;
    });
    return this.setState({
      wentWell,
      actionItems: [...this.state.actionItems, item]
    });
  }
  wellMoveRight = (moveIndex) => {
    const item = this.state.wentWell[moveIndex];
    const wentWell = this.state.wentWell.filter((item, index) => {
      return moveIndex !== index;
    });
    return this.setState({
      wentWell,
      toImprove: [...this.state.toImprove, item]
    });
  }
  improveMoveLeft = (moveIndex) => {
    const item = this.state.toImprove[moveIndex];
    const toImprove = this.state.toImprove.filter((item, index) => {
      return moveIndex !== index;
    });
    return this.setState({
      toImprove,
      wentWell: [...this.state.wentWell, item]
    });
  }
  improveMoveRight = (moveIndex) => {
    const item = this.state.toImprove[moveIndex];
    const toImprove = this.state.toImprove.filter((item, index) => {
      return moveIndex !== index;
    });
    return this.setState({
      toImprove,
      actionItems: [...this.state.actionItems, item]
    });
  }
  actionMoveLeft = (moveIndex) => {
    const item = this.state.actionItems[moveIndex];
    const actionItems = this.state.actionItems.filter((item, index) => {
      return moveIndex !== index;
    });
    return this.setState({
      actionItems,
      toImprove: [...this.state.toImprove, item]
    });
  }
  actionMoveRight = (moveIndex) => {
    const item = this.state.actionItems[moveIndex];
    const actionItems = this.state.actionItems.filter((item, index) => {
      return moveIndex !== index;
    });
    return this.setState({
      actionItems,
      wentWell: [...this.state.wentWell, item]
    });
  }
  
  // -------- UPDATING USER INPUT VALUE -------- 
  // Update the inputValue state on the fly as the user types 
  updateWellValue = e => this.setState({ wellValue: e.target.value });
  updateImproveValue = e => this.setState({ improveValue: e.target.value });
  updateActionValue = e => this.setState({ actionValue: e.target.value });


  // -------- SUBMITTING A NEW ITEM --------
  wellSubmit = e => {
    e.preventDefault();
    if(!this.state.wellValue){
      return alert("Empty note discarded");
    }
    this.setState({
      wentWell: [...this.state.wentWell, {value: this.state.wellValue, likes: 0, dislikes: 0}],
      wellValue: ''
    })
  }
  improveSubmit = e => {
    e.preventDefault();
    if(!this.state.improveValue){
      return alert("Empty note discarded");
    }
    this.setState({
      toImprove: [...this.state.toImprove, {value: this.state.improveValue, likes: 0, dislikes: 0}],
      improveValue: ''
    })
  }
  actionSubmit = e => {
    e.preventDefault();
    if(!this.state.actionValue){
      return alert("Empty note discarded");
    }
    this.setState({
      actionItems: [...this.state.actionItems, {value: this.state.actionValue, likes: 0, dislikes: 0}],
      actionValue: ''
    })
  }
  // TODO: Consolidate submit methods.  Add '<form onSubmit={
  // e => this.props.submit(e, this.props.stateName)}></form>
  // to Category's render and pass this method as props:
  // handleSubmit = (e, category) => {
  //   e.preventDefault();
  //   this.setState({ 
  //     [category]: [...this.state[category], this.state.inputValue],
  //     inputValue: ""
  //    });
  // 

  
  // -------- UPDATE ITEM'S VALUE IN TEXTAREA --------
  wellTextUpdate = (e, itemIndex) => {
    const wentWell = [...this.state.wentWell];
    wentWell[itemIndex].value = e.target.value;
    return this.setState({ wentWell });
  }
  improveTextUpdate = (e, itemIndex) => {
    const toImprove = [...this.state.toImprove];
    toImprove[itemIndex].value = e.target.value;
    return this.setState({ toImprove });
  }
  actionTextUpdate = (e, itemIndex) => {
    const actionItems = [...this.state.actionItems];
    actionItems[itemIndex].value = e.target.value;
    return this.setState({ actionItems });
  }


  // -------- COUNTING VOTES --------
  wellUpvote = voteIndex => {
    const wentWell = [...this.state.wentWell];
    wentWell[voteIndex].likes += 1;
    return this.setState({ wentWell });
  }  
  wellDownvote = voteIndex => {
    const wentWell = [...this.state.wentWell];
    wentWell[voteIndex].dislikes += 1;
    return this.setState({ wentWell });
  }
  improveUpvote = voteIndex => {
    const toImprove = [...this.state.toImprove];
    toImprove[voteIndex].likes += 1;
    return this.setState({ toImprove });
  }  
  improveDownvote = voteIndex => {
    const toImprove = [...this.state.toImprove];
    toImprove[voteIndex].dislikes += 1;
    return this.setState({ toImprove });
  }
  actionUpvote = voteIndex => {
    const actionItems = [...this.state.actionItems];
    actionItems[voteIndex].likes += 1;
    return this.setState({ actionItems });
  }  
  actionDownvote = voteIndex => {
    const actionItems = [...this.state.actionItems];
    actionItems[voteIndex].dislikes += 1;
    return this.setState({ actionItems });
  }

  // -------- DELETING ITEMS --------
  wellDelete = deleteIndex => {
    const wentWell = this.state.wentWell.filter((item, index) => {
      return deleteIndex !== index;
    });
    return this.setState({ wentWell })
  }
  improveDelete = deleteIndex => {
    const toImprove = this.state.toImprove.filter((item, index) => {
      return deleteIndex !== index;
    });
    return this.setState({ toImprove })
  }
  actionDelete = deleteIndex => {
    const actionItems = this.state.actionItems.filter((item, index) => {
      return deleteIndex !== index;
    });
    return this.setState({ actionItems })
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
            upvote={this.wellUpvote}
            downvote={this.wellDownvote}
            delete={this.wellDelete}
            moveLeft={this.wellMoveLeft}
            moveRight={this.wellMoveRight}
            textUpdate={this.wellTextUpdate}
          />
          <Category 
            name="To Improve" 
            stateName="toImprove"
            items={this.state.toImprove}
            colorId="improveColor"
            inputValue={this.state.improveValue}
            updateInput={this.updateImproveValue}
            submit={this.improveSubmit}
            upvote={this.improveUpvote}
            downvote={this.improveDownvote}
            delete={this.improveDelete}
            moveLeft={this.improveMoveLeft}
            moveRight={this.improveMoveRight}
            textUpdate={this.improveTextUpdate}
          />
          <Category 
            name="Action Items" 
            stateName="actionItems"
            items={this.state.actionItems}
            colorId="actionColor"
            inputValue={this.state.actionValue}
            updateInput={this.updateActionValue}
            submit={this.actionSubmit}
            upvote={this.actionUpvote}
            downvote={this.actionDownvote}
            delete={this.actionDelete}
            moveLeft={this.actionMoveLeft}
            moveRight={this.actionMoveRight}
            textUpdate={this.actionTextUpdate}
          />
        </div>
      </>
    );
  }
}

export default App;
