import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import UpdateUserInfo from './edit-user'
import DeleteUser from './delete-user'


const ContactList = () => {

  const { users } = useSelector((s) => s.sample)


  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((it) => {
          return (
            <tr key={it}>
              <td>{it.name}</td>
              <td>{it.phone}</td>
              <td>{it.email}</td>
              <td className="d-flex flex-row">
                <div className="mr-2"><UpdateUserInfo id={it.id} /></div>
                <div><DeleteUser id={it.id} /></div>


              </td>
            </tr>
          )
        })}

      </tbody>
    </Table>
  )
}

React.memo(ContactList)

export default ContactList