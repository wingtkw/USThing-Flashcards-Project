import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import heroImage from '../assets/hero-image.svg'
import '../styles/herobanner.scss'

class HeroBanner extends Component {
    render() {
        return (
            <Jumbotron fluid className="flashcards-introduction-jumbotron">
                <div className="container">
                    <div className="flashcards-introduction-jumbotron-description">
                        <h1>Flashcards</h1>
                        <p>Create your own flashcards and Ace the exams.</p>
                        <Button variant="primary" className="flashcards-introduction-jumbotron-button">Learn more</Button>
                    </div>
                    <div className="flashcards-introduction-jumbotron-image d-none d-sm-block align-middle">
                        <img src={heroImage} className="align-middle" />
                    </div>
                </div>
            </Jumbotron>
        );
    }
}
export default HeroBanner