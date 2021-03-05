import React, { useState } from 'react'
import '../styles/flashcard.scss'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    function handleClick(e) {
        setFlip(!flip)
    }
    return (
        <div className={`flashcard ${flip ? 'flip' : 'not-flip'}`} onClick={handleClick}>
            <div className="front">
                {flashcard.question}
            </div>
            <div className="back">
                {flashcard.answer}
            </div>
        </div>
    )
}

export default Flashcard
