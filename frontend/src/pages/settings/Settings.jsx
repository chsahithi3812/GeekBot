import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="setting">
           <div className="settingWrapper">
               <div className="settingTitle">
                   <span className="settingUpdateTitle">Update Your Account</span>
                   <span className="settingDeleteTitle">Delete Account</span>
               </div>
               <form className="settingForm">
                   <label className="heading">Profile Picture</label>
                   <div className="settingPP">
                       <img src="https://miro.medium.com/max/840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg" alt=""/>
                       <label htmlFor="fileInput">
                       <i className="settingPPIcon fa-solid fa-user"></i>
                       </label>
                       <input  className="settingPPInput"type="file" id="fileInput"  style={{display: 'none'}}/>
                   </div>
                   <label className="heading">Username</label>
          <input  style={{width:500}} type="text" placeholder="Safak" name="name" />
          <label className="heading">Email</label>
          <input style={{width:500}}  type="email" placeholder="safak@gmail.com" name="email" />
          <label className="heading">Password</label>
          <input style={{width:500}} type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
               </form>
           </div>
        <Sidebar/>
    </div>
  )
}
