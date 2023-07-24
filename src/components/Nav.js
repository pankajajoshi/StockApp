import { Link } from "react-router-dom";


export default function Nav1 (props){
  return (
    <div className="nav-item">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard </div>
      </Link>
    </div>
  );
};