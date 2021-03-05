import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { BsChevronRight } from 'react-icons/bs'
import HomeHeroImage from '../assets/study.svg'
import RecentFlashcardSets from '../data/demo-recent-flashcard-sets.json'
import '../styles/homepage.scss';

const RecentFlashcard = ({ flashcardSet }) => {
  return (
    <div className="recent-flashcard">
      <Card>
        <Card.Body>
          <Card.Title>{flashcardSet.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{flashcardSet.owner}</Card.Subtitle>
          <Card.Text>{flashcardSet.description}</Card.Text>
          <Card.Link href={'flashcard-list-view/' + flashcardSet.id}>View</Card.Link>
          <Card.Link href="#">Share</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
const RecentFlashcardList = ({ recentFlashcardSets }) => {
  return (
    <div className="flashcard-grid">
      {recentFlashcardSets.map(flashcardSet => {
        return <RecentFlashcard flashcardSet={flashcardSet} key={flashcardSet.id} />
      })}
    </div>
  )
}

function HomePage() {
  const recentFlashcards = RecentFlashcardSets
		return (
			<div className="homepage-view">
        <div>
          <Card className="create-flashcards-section px-4 py-4">
            <Row>
              <Col sm={3}>
                <img src={HomeHeroImage} className="card-img-top h-100" />
              </Col>
              <Col sm={9} className="create-flashcards-col">
                <h4>Learn any subjects by creating your own flashcard</h4>
                <Button>Create Flashcard Set</Button>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="recent-flashcards-section">
          <Container fluid className="recent-flashcards-header mb-3">
            <Row className="align-items-center">
              <Col>
                <h4>Recent Flashcards</h4>
              </Col>
              <Col className="text-left text-sm-right">
                <Link to='/flashcard-sets-view' className="view-all-button">
                  View all <BsChevronRight />
                </Link>
              </Col>
            </Row>
          </Container>
          <RecentFlashcardList recentFlashcardSets={recentFlashcards} className="recent-flashcards-card-list" />
        </div>
      </div>
		);
}

export default HomePage;
