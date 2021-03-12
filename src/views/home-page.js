import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import HomeHeroImage from "../assets/study.svg";
import RecentFlashcardSets from "../data/demo-recent-flashcard-sets.json";
import "../styles/homepage.scss";
import "../styles/modal.scss";

const RecentFlashcard = ({ flashcardSet }) => {
  return (
    <div className="recent-flashcard">
      <Card>
        <Card.Body>
          <Card.Title>{flashcardSet.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {flashcardSet.owner}
          </Card.Subtitle>
          <Card.Text>{flashcardSet.description}</Card.Text>
          <Card.Link href={"flashcard-list-view/" + flashcardSet.id}>
            View
          </Card.Link>
          <Card.Link href="#">Share</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
const RecentFlashcardList = ({ recentFlashcardSets }) => {
  return (
    <div className="flashcard-grid">
      {recentFlashcardSets.map((flashcardSet) => {
        return (
          <RecentFlashcard flashcardSet={flashcardSet} key={flashcardSet.id} />
        );
      })}
    </div>
  );
};

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}

        {console.log("modal openned")}
      </div>
    </div>
  );
};

function HomePage() {
  const [modal, setModal] = useState(false);
  const [owner, setOwner] = useState("");
  const [modalOwner, setModalOwner] = useState("");
  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    const valueTitle = target.name === "modalTitle" ? target.value : modalTitle;
    const valueOwner = target.name === "modalOwner" ? target.value : modalOwner;
    const valueDesc = target.name === "modalDescription" ? target.value : modalDescription;

    setModalTitle(valueTitle);
    setModalOwner(valueOwner);
    setModalDescription(valueDesc);
  };

  const handleSubmit = (e) => {
    setTitle(modalTitle);
    setOwner(modalOwner);
    setDescription(modalDescription);
    modalClose();
  };

  const modalOpen = () => {
    setModal(true);
  };

  const modalClose = () => {
    setModalTitle("");
    setModalOwner("");
    setModalDescription("");
    setModal(false);
  };

  const recentFlashcards = RecentFlashcardSets;
  return (
    <div className="homepage-view">
      <div>
      <h2>Hello {owner} {title} {description}</h2>{/*INPUT TEST */}
        <Card className="create-flashcards-section px-4 py-4">
          <Row>
            <Col sm={3}>
              <img src={HomeHeroImage} className="card-img-top h-100" />
            </Col>
            <Col sm={9} className="create-flashcards-col">
              <h4>Learn any subjects by creating your own flashcard</h4>
              <Button href="javascript:;" onClick={(e) => modalOpen(e)}>
                Create Flashcard Set
              </Button>
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
              <Link to="/flashcard-sets-view" className="view-all-button">
                View all <BsChevronRight />
              </Link>
            </Col>
          </Row>
        </Container>
        <RecentFlashcardList
          recentFlashcardSets={recentFlashcards}
          className="recent-flashcards-card-list"
        />
      </div>

      <Modal show={modal}>
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create New Flashcard List</h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  value={modalTitle}
                  placeholder="Input title"
                  name="modalTitle"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                />
                <label>Owner:</label>
                <input
                  type="text"
                  value={modalOwner}
                  placeholder="Input owner"
                  name="modalOwner"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                />
                <label>Description:</label>
                <input
                  type="text"
                  value={modalDescription}
                  placeholder="Input description"
                  name="modalDescription"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="form-group">
                <button onClick={(e) => handleSubmit(e)} type="button">
                  Save
                </button>
                <button
                  type="button"
                  href="javascript:;"
                  className="modal-close"
                  onClick={modalClose}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
