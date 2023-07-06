import {Link} from "react-router-dom"
function Header(props) {
  const {title,search,setSearch} = props
  return (
    <div className="Header">
      <div className = "Nav">
      <Link to ="/"><h1>{title}</h1></Link>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       >
       </input>
      </div>
    </div>
  );
}

export default Header;
