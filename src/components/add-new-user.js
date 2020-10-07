import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addNewUser } from '../redux/reducers/sample'

const AddNewUserInfo = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    dispatch(addNewUser(id, name, phone, email))
    setShow(false)
  };

  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const id = uuidv4()
  const dispatch = useDispatch()


  const modalBody = (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Имя и фамилия</Form.Label>
        <Form.Control type="email" placeholder="Введите ваше имя и фамилию" value={name} onChange={((e) => setName(e.target.value))}/>
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control type="email" placeholder="Введите ваш номер" value={phone} onChange={((e) => setPhone(e.target.value))}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите вашу почту" value={email} onChange={((e) => setEmail(e.target.value))}/>
      </Form.Group>
    </Form>
  )

  return (
    <div className="my-2">
      <Button variant="primary" onClick={handleShow}>
        Добавить нового пользователя
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

export default AddNewUserInfo