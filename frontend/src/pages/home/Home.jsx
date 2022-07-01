import { useState ,useEffect} from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import "./home.css"
import axios from "axios"
import { useLocation } from "react-router-dom"



export default function Home() {

const [posts, setPosts] = useState([]);
const {search}= useLocation()
useEffect(() => {
  const fetchPosts =  () => {
      axios.get(`http://localhost:9000/api/posts${search}`).then(res=>{
        console.log(res)
        setPosts(res.data);
      })
   
  };
  fetchPosts();
}, [search]);
  
  return (
    <>
    <Header/>
    <div className="home">
   <Posts posts={posts}/>
   <Sidebar/>
    
    </div>
    </>
  )
}
