import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import HomeLogin from './pages/HomeLogin'
import Post from './pages/Post'
import { useEffect, useState } from "react"
import Edit from "./pages/Edit"
import { auth } from "./firebase"
import Private from "./pages/Private"





function App() {
 
const [PostValue, setPostValue] = useState(""); //포스트 페이지 내용
const [editText, seteditText] = useState(""); //현재 에딧 페이지 내용
const [correctionValue, setCorrection] = useState(""); //수정한 에딧 페이지 내용
const [userId, setuserId] = useState("");

const [isLoading, setIsLoading] = useState(true) //로그인 상태

const handlePost = (value, userId) => {
  console.log(value);
  setPostValue(value);
  setCorrection(value);
}

// 에딧 버튼 클릭시 텍스트 내용 edit파일로 보내기
const handleEdit = (churead, userId) => {
  seteditText(churead);
  setuserId(userId);
  console.log(userId);
  
}
 

const init = async() => {
  //로그인 상태 변화 감지
  await auth.authStateReady();
  console.log('인증 완료', auth)
  // 인증 준비 다 되면 로딩 false
  setIsLoading(false);
}


useEffect(() => {
  init();
}, []);


if (isLoading) return <p>Loading...</p>;

  return (
    <div>
    <BrowserRouter>
      <Routes>
        {/* 로그인 사용자만 접근 가능한 페이지  */}
      <Route path="/" element={<Private/>}>  
        <Route path="/Homelogin" element={<HomeLogin PostValue={PostValue} onEdit={handleEdit} correctionValue={correctionValue} userId={userId}/>}/>
        <Route path="/Post" element={<Post onPost={handlePost}/>}/>
        <Route path="/Edit" element={<Edit onPost={handlePost} editText={editText} userId={userId}/>}/>
      </Route> 
        {/* 비 로그인 사용자도 접근 가능한 페이지  */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

    </div>

  );
}
export default App;
