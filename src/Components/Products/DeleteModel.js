import React from "react";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from 'react-icons/ri';
import Modal from "react-bootstrap/Modal";
import "./Products.css"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="rounded-1 border-0">Close</Button>
        <Button onClick={props.onHide} className="bg-danger rounded-1 border-0">delete</Button>
      </Modal.Footer>
    </Modal>
  );
}
const DeleteModel = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModalShow(true)} className="delete_btn bg-danger border-0 m-0 p-0">
        <RiDeleteBin6Line size={"15px"} className="m-0 p-0" />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default DeleteModel;
