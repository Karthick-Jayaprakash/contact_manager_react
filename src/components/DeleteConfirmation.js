import {Link,useParams} from "react-router-dom"
import React from "react"
function DeleteConfirmation({contacts, handleDelete}) {
  const {id} = useParams()
  const contact = contacts.find(contact => (contact.id).toString() === id)
  let deleteName=""
  if (contact){
    deleteName=contact.name
  }
  
  return (
    <div className="DeleteConfirmation">
      <p>Are you Sure to delete the contact of <strong>{deleteName}</strong> </p>
      <p className="note">Note: This action cannot be undone</p>  
      <button onClick={() =>handleDelete(contact.id)}>Delete</button>
    </div>
  );
}

export default DeleteConfirmation;
