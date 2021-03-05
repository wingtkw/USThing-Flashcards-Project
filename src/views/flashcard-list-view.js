import React, { useState } from 'react'
import FlashcardList from '../components/FlashcardList'
import MyFlashcardSetList from '../data/demo-flashcard-list.json'
import '../styles/flashcard-list-view.scss';

class FlashcardListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cards: []
    };
  }
  componentDidMount() {
    const flashcardSet = MyFlashcardSetList.find(flashcardSet => flashcardSet.id === this.props.id)
    if(flashcardSet !== undefined) {
      if(flashcardSet.cards !== undefined && flashcardSet.cards !== null && flashcardSet.cards.length > 0) {
        const set = flashcardSet.cards
        this.setState({ title: flashcardSet.title, cards: set});
      }
    }
  }
  render() {
    return (
      <div className="flashcards-list-view">
        <h4 className="mb-4">{this.state.title}</h4>
        <FlashcardList flashcards={this.state.cards} />
      </div>
    );
  }
}

export default FlashcardListView;
