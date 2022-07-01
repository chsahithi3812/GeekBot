import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
 const user=false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook" ></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCentre">
           <ul className="topList">
           <li className="topListItem">
             <Link to="/" className="link">HOME</Link>
           </li>
           
           <li className="topListItem">
           <Link to="/write" className="link">WRITE</Link>

           </li>
           <li className="topListItem">
           {user && "LOGOUT"}

           </li>
           </ul>

        </div>
        <div className="topRight">
        {
          user ? (
            <img className="topImage"
          src="https://media.istockphoto.com/photos/beautiful-young-woman-with-laptop-isolated-on-white-background-picture-id1321598161?k=20&m=1321598161&s=170667a&w=0&h=cPmvggzxAKup_ptbFJVR0Rv1ZMfPqaMfHpvdnyYYXiM="
        
          alt=" "
        />
          ):(<ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
       
        </div>

    </div>
  )
}
