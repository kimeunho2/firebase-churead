import React from 'react'
import Line from '../components/Line'
import UserImage from '../components/UserImage'
import UserName from '../components/UserName'
import Text from '../components/Text'
import ItemButtons from './ItemButtons'

const Item = ({userName, text, userProfileImage, likeCount, onDelete, id, edit }) => {
  

  


  const handleDelete = () => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

    if (isConfirmed) {
      onDelete(id);
    } else {
      console.log("삭제가 취소되었습니다.");
    }

  };  
  
  
  
  return (
    <div>
    <Line/>
    <div className='userImage-ItemButtons-text'>
    <div className='UserImage userItem-image'>
    <UserImage userProfileImage={userProfileImage}/>
    </div>
    <div className='UserName-Text-ItemButtons'>
    <div className='userName-Text'>
    <UserName userName={userName}/>
    <Text text={text}/>
    </div>
    <ItemButtons onDelete={handleDelete} edit={edit} text={text} id={id} />
    </div>
    </div>
    <img src="/images/heart.svg" alt='하트'/>{likeCount}
    </div>
  )
}
export default Item