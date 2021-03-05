import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap'
import MyFlashcardSetList from '../data/demo-flashcard-list.json'
import { Link } from "react-router-dom";
import '../styles/flashcard-sets-view.scss';

const MyFlashcard = ({ flashcardSet }) => {
  // const history = useHistory()
  // const viewFlashcardSet = (id) => history.push(`/flashcard-list-view/${id}`)
  return (
    <Link to={'flashcard-list-view/' + flashcardSet.id}>
      <div className="my-flashcard-container" >
        <div className="my-flashcard">
          <h5 className="my-flashcard-title">{flashcardSet.title}</h5>
          <span className="my-flashcard-course-code mb-2 text-muted">{flashcardSet.course_code}</span>
          <span className="my-flashcard-owner mb-2 text-muted">{flashcardSet.owner}</span>
          <p className="my-flashcard-description">{flashcardSet.description}</p>
        </div>
      </div>
    </Link>
  )
}

const MyFlashcardList = ({ flashcardSets }) => {
  return (
    <div className="my-flashcard-grid">
      {flashcardSets.map(flashcardSet => {
        return <MyFlashcard flashcardSet={flashcardSet} key={flashcardSet.id} />
      })}
    </div>
  )
}

const FlashcardSetsView = () => {
  const [MyFlashcardSets, setMyFlashcardSets] = useState(MyFlashcards)

  const filterFlashcardSets = (event) => {
    var userInput = event.target.value
    var filteredFlashcardSets = MyFlashcards.filter(sets => sets.title.includes(userInput) || sets.course_code.includes(userInput) || sets.description.includes(userInput))
    setMyFlashcardSets(filteredFlashcardSets)
  }
  return (
    <div className="flashcard-sets-view">
      <Container fluid className="flashcard-sets-search-bar">
        <Row className="d-flex align-items-center">
          <Col xs="12" sm="6" md="4" className="title-container">
            <h4 className="flashcard-sets-title">My Flashcards</h4>
          </Col>
          <Col xs="12" sm="6" md="8" className="search-flashcard-sets-container">
            <Form inline>
              <FormControl type="text" placeholder="Search Flashcard Sets" className="search-flashcard-sets-field ml-sm-auto mr-sm-0 mr-auto ml-0" onChange={filterFlashcardSets} />
            </Form>
          </Col>
        </Row>
      </Container>
      <MyFlashcardList flashcardSets={MyFlashcardSets} />
    </div>
  );
}

const MyFlashcards = MyFlashcardSetList
export default FlashcardSetsView;

