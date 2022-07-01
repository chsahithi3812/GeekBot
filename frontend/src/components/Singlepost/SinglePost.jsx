import { Link, useLocation } from "react-router-dom"
import { useState ,useEffect,useContext} from "react"
import axios from "axios"
import "./singlepost.css"

export default function SinglePost() {
  const location= useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path)
  const [post, setPost] = useState({});
  const PF = "http://localhost:9000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      console.log("hello")
      let res = await axios.get(`http://localhost:9000/api/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
 
  return (
    <div className="singlePost">
<div className="singlePostWrapper">
{post.photo  && (
  <img  className="singlePostImg"
    src={PF+ post.photo}
    alt=" "
/>
)}

<h1 className="singlePostTitle">
{post.title}
<div className="singlePostEdit">
<i className="singlePostIcon fa-solid fa-pen"></i>
<i className="singlePostIcon fa-solid fa-trash"></i>
</div>
</h1>
<div className="singlePostInfo">
<span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
    <span className="singlePostDate">  {new Date(post.createdAt).toDateString()}</span>

</div>
<p className="singlePostDesc">

</p>
</div>
{post.desc}
    </div>
  )
}
