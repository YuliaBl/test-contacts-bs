import React from 'react'
import AddNewUserInfo from './add-new-user'
import ContactList from './contact-list'


const Main = () => {

  return (
    <div className="w-75 mx-auto my-4">
      <AddNewUserInfo />
      <ContactList />
    </div>
  )
}

React.memo(Main)

export default Main