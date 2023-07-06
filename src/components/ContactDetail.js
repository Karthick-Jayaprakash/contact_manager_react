import {Link, useParams} from "react-router-dom"
import img from './img.png'

function ContactDetail({contacts}) {
  
  const {id} = useParams()
  const contact = contacts.find(contact => (contact.id).toString() === id)
  let name;
  let email;
  let description;
  if(contact){
    name = contact.name
    email = contact.email
    description = contact.description
  }
  return (
  
    <div className="ContactDetail">
        <img src={img}></img>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{description}</p>
    </div>
  
  );
}

export default ContactDetail;
