import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
function EditContact({contacts,editName,setEditName,editEmail,setEditEmail,handleEdit,editDescription,setEditDescription}) {
  const {id} = useParams()
  const contact = contacts.find(contact =>(contact.id).toString() === id)
  useEffect(() =>{
    if(contact){
      setEditName(contact.name)
      setEditEmail(contact.email)
      setEditDescription(contact.description)
    }
   },[contact,contacts,setEditName,setEditEmail,setEditDescription])
  return (
    <div className="EditContact">
        <h2>Edit Contact</h2>
        <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label>Name</label>
          <input
             type="text"
             required
             placeholder="Name"
             value={editName}
             onChange= {(e) => setEditName(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
             type="email"
             required
             placeholder="Email"
             value={editEmail}
             onChange={(e) => setEditEmail(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
             type="email"
             required
             placeholder="Description"
             value={editDescription}
             onChange ={(e) => setEditDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={() =>handleEdit(contact.id)}  type="submit">Edit</button>
      </form>
    </div>
  );
}
export default EditContact;
