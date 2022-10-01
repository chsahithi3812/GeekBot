import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Topbar() {
  const {user,dispatch}=useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };  const PF = "http://localhost:9000/images/";




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
           <li className="topListItem" onClick={handleLogout}>
           {user && "LOGOUT"}

           </li>
           </ul>

        </div>
        <div className="topRight">
        {
          user ? (
            <Link to="/settings">
            <img className="topImage"
          src={PF+user.profilePic}
          alt=" "
        /></Link>
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
      
       
        </div>

    </div>
  )
}
