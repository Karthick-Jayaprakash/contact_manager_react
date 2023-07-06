import {Link} from "react-router-dom"

function ContactCard  ({contact,handleDelete}) { 
  return (
    <div className="ContactCard">
      <div className="item">
        <div className="content">
          <Link to={`/contact-detail/${contact.id}`}><h3>{contact.name}</h3></Link>
          <p>{contact.email}</p>
        </div>
        <div className="ContactCardButtons">
          <Link to={`/editcontact/${contact.id}`}><button>Edit</button></Link>
          <Link to ={`/deletecontact/${contact.id}`}><button>Delete</button></Link>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
