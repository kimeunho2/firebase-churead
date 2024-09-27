import React, {useEffect, useState } from 'react';
import Item from '../components/Item';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, deleteDoc, doc, increment, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';






const HomeLogin = ({onEdit, correctionValue, userId}) => {
  
  //** 피드 글 작성자인 경우에만 edit,delete 버튼 보여주기
  // 1. 로그인한 사용자의 id값 가져오기
  // 2. 게시글의 작성자 id값 가져오기 (userId)
  // 3. 두 id 값을 비교
  // 4. 비교한 값이 같은 경우(true): 아이콘을 보여주기
  // 5. 비교한 값이 다를 경우(false): 아이콘 숨기기
  
  //회원가입한 유저의 정보
  const user = auth.currentUser
  
  // 피드 글 목록
  const [feedList, setFeedList] = useState([]);

  // 글 작성자인지 아닌지 체크
  const [isAuthor, setIsAuthor] = useState(false);
  
  const navigate = useNavigate();

  let unsubscribe = null;


  //에딧 버튼 클릭시 작동
  const edit = (churead, userId, data) => {
    onEdit(churead, userId, data); //app.js의 함수 실행
    
    navigate('/edit');
  }
  

 
// 삭제 버튼 클릭시 작동
  const onDelete = async (data) => {

    if (data.userId !== user.uid) return;


    try {
      await deleteDoc(doc(db, 'chureads', data.id))

    } catch (error) {
      console.log(error.message)
      
    }

  }


  useEffect(() => {
    if (!correctionValue) return;

    const correctionFeedList = feedList.map((feed) => {
       if (feed.userId === userId) {
        return {
          ...feed,
          churead: correctionValue, 
        };
       }
    
       return feed;
  });
      
    setFeedList(correctionFeedList);}, [correctionValue]);



    // 파이어베이스 데이터 베이스 불러오기
    const getLiveData = () => {
      const colletionRef = collection(db, 'chureads');
   
      
      const cureadQuery = query(colletionRef, orderBy('createAt', 'desc'));
  
      unsubscribe = onSnapshot(cureadQuery, (snapshot) => {
      
        const datas = snapshot.docs.map(item => {
        
          return { id: item.id, ...item.data()};

        });
        setFeedList(datas); 
        
      });
      
    };
    
 

  useEffect(() => { 
    getLiveData();

    return () => {
      unsubscribe && unsubscribe()
    }
  }, []);


  //로그아웃 버튼 클릭시
  const handleLogout = async () => {
    const ok = window.confirm("정말 로그아웃 하시겠습니까?");
    
    if (!ok) return; // 아니오 버튼 클릭시 리턴

    try {
      await auth.signOut() 
      navigate('/login') //auth. signOut() 비동기 처리 성공 시 이동

    } catch (error) {
      console.log(error.message)

    }

  } 
  
//하트 클릭시 작동
  const handleLike = async (data) => {

  await updateDoc(doc(db, 'chureads', data.id),{likeCount: increment(1)} );


}


  return (
    <div className='homeLogin'>
    <div className='logo-logoutButton'>
    <div className='center-wrapper'>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    </div>
    <div>
      <Button text="로그아웃" className="logout-Button" onClick={handleLogout}/>
    </div>
    </div>
    <div className='homeLoginText'>
      {feedList.map((feed) => 
        <Item 
          data={feed}
          key={feed.id} loginid={user.uid}
          onDelete={onDelete} 
          edit={edit} onLike={handleLike}
         />
 
        ) 
      }
      <Nav/>
    </div>
    </div>
  )
}

export default HomeLogin