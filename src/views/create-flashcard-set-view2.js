import { Modal } from "bootstrap";
import React, { useState } from "react";




const CreateFlashcardSetView = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
  
  function handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  function modalOpen() {
    this.setState({ modal: true });
  }

  function modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }

  return (
    <div className="create-flashcard-set-view">
      <h3>Create New Flashcard Set</h3>
      {inputList.map((x, i) => {
        return (
          <Modal>
          <div className="box">
            <input
              name="firstName"
   placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName"
   placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
          </Modal>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}
 
export default CreateFlashcardSetView;