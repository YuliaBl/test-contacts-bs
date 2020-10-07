import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/reducers/sample'

const UpdateUserInfo = ({ id }) => {

  const { users } = useSelector((s) => s.sample)
  const userToEdit = users.filter((it) => (it.id === id ? it : null))

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    dispatch(updateUser(id, name, phone, email))
    setShow(false)
  };


  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const dispatch = useDispatch()


  const modalBody = (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Имя и фамилия</Form.Label>
        <Form.Control type="email" placeholder={userToEdit[0].name} value={name} onChange={((e) => setName(e.target.value))}/>
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control type="email" placeholder={userToEdit[0].phone} value={phone} onChange={((e) => setPhone(e.target.value))}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder={userToEdit[0].email} value={email} onChange={((e) => setEmail(e.target.value))}/>
      </Form.Group>
    </Form>
  )

  return (
    <div className="my-2">
      <Button className="btn btn-secondary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Укажите данные</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateUserInfo