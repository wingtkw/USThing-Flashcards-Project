import React from 'react'
import Flashcard from './Flashcard'
import '../styles/flashcard-list.scss'

const FlashcardList = ({ flashcards }) => {
    console.log('meow', flashcards)
    return (
        <div className="flashcard-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
export default FlashcardList