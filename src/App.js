import './App.css';
import React from "react"
import AddContact from './components/AddContact'
import Header from './components/Header'
import ContactList from './components/ContactList'
import EditContact from './components/EditContact'
import ContactDetail from './components/ContactDetail'
import DeleteConfirmation from './components/DeleteConfirmation'
import ErrorPage from './components/ErrorPage'
import {useState,useEffect} from "react"
import {Routes, Route, useNavigate} from "react-router-dom"

function App() {
  const LOCAL_STORAGE_KEY = "Contacts"
  const [contacts,setContacts] = useState([])
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [description,setDescription] = useState('')
  const [editDescription,setEditDescription] = useState('')
  const [editName,setEditName] = useState('')
  const [editEmail,setEditEmail] = useState('')
  const [image,setImage] = useState('')
  const [editImage,setEditImage] = useState('')
  const [search,setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts) 
      setContacts(retrieveContacts)
  },[])

  useEffect(()=>{
    if (contacts.length > 0) {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))}
  },[contacts])

  const handleSubmit = () =>{
    const newContact = {id : contacts.length ? contacts[contacts.length-1].id +1 : 1,
                        name:name,
                        email:email,
                        description:description
                      }
    console.log(newContact)
    setContacts([...contacts,newContact])
    setName('')
    setEmail('')
    setDescription('')
    navigate('/')
  }

  const handleDelete = (id) => {
    const filteredResults = contacts.filter(contact =>
    {
      return contact.id !== id
    })
    setContacts(filteredResults)
    navigate('/')
  }
  
  const handleEdit = (id) =>{
    const updatedContact = { id : id,
                            name:editName,
                            email:editEmail,
                            description:editDescription}
    setContacts(contacts.map(contact => contact.id === id?{...updatedContact}:contact))
    navigate('/')
  }


 return (
    <div className="App">
      <Header title="Contact Manager" search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/add-contact' element=
          {<AddContact name={name} setName={setName}
            email={email} setEmail={setEmail} contacts={contacts}
            handleSubmit={handleSubmit} description={description}
            setDescription={setDescription} image={image} setImage={setImage}/>
          }/>
        <Route path="/" element=
          {<ContactList 
            contacts={contacts.filter((contact) => ((contact.name).toLowerCase()).includes(search.toLowerCase()))} />
          }/>
        <Route path="/editcontact/:id" element=
          {<EditContact contacts={contacts}
            editName={editName} setEditName = {setEditName}
            editEmail={editEmail} setEditEmail={setEditEmail}
            handleEdit={handleEdit} editDescription={editDescription}
            setEditDescription={setEditDescription} editImage={editImage}
            setEditImage = {setEditImage}/>
          }/>
        <Route path="/deletecontact/:id" element=
          {<DeleteConfirmation contacts={contacts}
           handleDelete={handleDelete} />}
        />
        <Route path="/contact-detail/:id" element=
          {<ContactDetail contacts={contacts}/>}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
