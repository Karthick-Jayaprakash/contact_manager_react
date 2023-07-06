import React from "react"
import ContactCard from './ContactCard'
import {Link} from "react-router-dom"

function ContactList({contacts,handleDelete}) {
  const renderContact = contacts.map((contact) =>{ 
  return(
      <ContactCard key={contact.id} contact={contact} handleDelete={handleDelete}/>
    )
  })
  return(
    <div className="ContactList">
      <div className="header">
      <h2>Contact List</h2>
      <Link to="/add-contact"><button>Add Contact</button></Link>
      </div>
      {renderContact}
    </div>
  )
}


export default ContactList;
