function AddContact({name,email,setName,setEmail,contacts,handleSubmit,description,setDescription}) {
  return (
    <div className="AddContact">
      <h2>Add Contact</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label>Name</label>
          <input
             type="text"
             required
             placeholder="Name"
             value={name}
             onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
             type="email"
             required
             placeholder="Email"
             value={email}
             onChange ={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
             type="email"
             required
             placeholder="Description"
             value={description}
             onChange ={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={() => handleSubmit()} type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
