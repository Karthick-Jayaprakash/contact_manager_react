import {Link} from "react-router-dom"
import react from "react"

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <h2>404-Page Not Found</h2>
      <p>Your searching page is not exist or deleted</p>
      <Link to="/"><button>Back To Home</button></Link>
    </div>
  );
}

export default ErrorPage;
