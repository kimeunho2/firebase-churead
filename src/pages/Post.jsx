import React, { useEffect, useState, useRef } from 'react'
import Line from '../components/Line'
import UserImage from '../components/UserImage'
import UserName from '../components/UserName'
import Button from '../components/Button'
import Nav from '../components/Nav'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const Post = () => {
  const user = auth.currentUser
  
  const textareaRef = useRef(null)


  const [value, setValue] = useState('');

  const Navigate = useNavigate()

  const handleChange = (event) => {

      const {value} = event.target;

      setValue(value);
  

  }


  const handleClick = async () => {
    console.log(value);

    Navigate("/homelogin");

    try {
      const addFeedList = {
        userId: user.uid,
        userName: user.displayName || '익명',
        userProfileImage: user.photoURL || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
        churead: value,
        likeCount: 0,
        createAt: Date.now()

        
      };

      await addDoc(collection(db, 'chureads'), addFeedList);
    
    } catch (error) {
      console.log(error.message);
    }

  }




  useEffect(() => {
    console.log("123",textareaRef);
  }, {})


  return (
    <>  
    <div div className='post-Page'>
    <div className='post-text'>
        <p>취소</p>
        <p className='center-text'>새로운 스레드</p>
        </div>  
        <Line/>
        <div className='post-userImage-userName-area'>
        <UserImage/>
        <div className={user.photoURL || undefined}>
        <UserName userName={user.displayName} className="post-userName"/>
        <textarea className='textarea-class' placeholder="텍스트를 입력하세요..." onChange={handleChange} ref={textareaRef

          
        }> </textarea>
        </div>
        </div>
        <div className='Reply-Post'>
        <p className='Reply'>누구에게나 답글 및 인용 허용</p>
        <Button type="submit" text="게시" onClick={handleClick} className="post"/>
        <Nav/>
        </div>
        </div>
    </>
)
}

export default Post