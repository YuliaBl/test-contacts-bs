import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { deleteUser } from '../redux/reducers/sample'

const DeleteUser = ({ id }) => {

  const dispatch = useDispatch()

  return (
    <div className="my-2">
      <Button className="btn btn-danger" onClick={(() => dispatch(deleteUser(id)))}>
        delete
      </Button>
    </div>
  );
}

export default DeleteUser