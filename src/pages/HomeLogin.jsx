import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { initialFeedList } from '../data/response';
import { useNavigate } from 'react-router-dom';





const HomeLogin = ({PostValue, onEdit, correctionValue, id}) => {
  const [feedList, setFeedList] = useState(initialFeedList);
  
  const navigate = useNavigate();

  /**피드 수정하기
   * 1. 버튼을 클릭하면 Edit.jsx로 이동
   * 2. Edit.jsx에서 내용을 기존 내용으로 채운다.
   *  - 아이템에 있는 사용자가 작성한 내용을 app.js로 가져온다.
   *  - 그 내용 데이터를 Edit으로 보낸다.  
   * 3. 내응을 수정하고, 수정 버튼을 누르면 수정한 내용으로 변경된다.
   *  - 가져온 값이 있다면 id 값을 비교해서 일치하는 것을 수정한다.
   *  - 게시 버튼을 누르면 홈로그인에 피드리스트의 텍스트를 수정한다.
   */

  const edit = (text, id) => {
    // console.log(text);
    // seteditText(text);

    onEdit(text, id);
    
    navigate('/edit');
  }
  

 

  const onDelete = (id) => {
    const updatedFeedList = feedList.filter((item) => item.id !== id)
    


    console.log("삭제되었습니다.1", updatedFeedList);

    setFeedList(updatedFeedList, id);
  }


  useEffect(() => {
    console.log(correctionValue, id);
    if (!correctionValue) return;

    const correctionFeedList = feedList.map((feed) => {
       if (feed.id === id) {
        return {
          ...feed,
          churead: correctionValue, 
        };
       }
    
       return feed;
  });
      
    setFeedList(correctionFeedList);}, [correctionValue]);


    
    
    useEffect(() => {
    console.log("1231", PostValue);
    if (!PostValue) return;
   
    const addFeedList = {
      id: initialFeedList.length +1,
      userName: "kimeunho",
      churead: PostValue,
      likeCount: 0,
    }

    setFeedList([addFeedList, ...feedList])
    
  }, []);



  

  return (
    <div className='homeLogin'>
    <div className='logo-logoutButton'>
    <div className='center-wrapper'>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    </div>
    <div>
      <Button text="로그아웃" className="logout-Button"/>
    </div>
    </div>
    <div className='homeLoginText'>
      {feedList.map((feed) => 
        <Item 
          userName={feed.userName}
          text={feed.churead}
          key={feed.id}
          userProfileImage={feed.userProfileImage}
          likeCount={feed.likeCount} onDelete={onDelete} id={feed.id}
          edit={edit}/>
        ) 
      }
      <Nav/>
    </div>
    </div>
  )
}

export default HomeLogin