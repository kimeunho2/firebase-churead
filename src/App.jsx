import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import HomeLogin from './pages/HomeLogin'
import Post from './pages/Post'
import { useState } from "react"
import Edit from "./pages/Edit"





function App() {
 
const [PostValue, setPostValue] = useState("");
const [editText, seteditText] = useState("");
const [correctionValue, setCorrection] = useState("");
const [id, setId] = useState("");

const handlePost = (value, id) => {
  console.log(value);
  setPostValue(value);
  setCorrection(value);
}

const handleEdit = (text, id) => {
  console.log(text);
  seteditText(text);
  setId(id);
}
 


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Sign-up" element={<SignUp/>}/>
        <Route path="/Homelogin" element={<HomeLogin PostValue={PostValue} onEdit={handleEdit} correctionValue={correctionValue} id={id}/>}/>
        <Route path="/Post" element={<Post onPost={handlePost}/>}/>
        <Route path="/Edit" element={<Edit onPost={handlePost} editText={editText} id={id}/>}/>
      </Routes>
    </BrowserRouter>

    </div>

  );
}
export default App;
