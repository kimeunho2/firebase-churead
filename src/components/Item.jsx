import React from 'react'
import Line from '../components/Line'
import UserImage from '../components/UserImage'
import UserName from '../components/UserName'
import Text from '../components/Text'
import ItemButtons from './ItemButtons'

const Item = ({data, onDelete, onLike, edit, loginid}) => {
  
const {userName, churead, userProfileImage, likeCount, userId} = data; 

console.log("userid", userId);
console.log("loginid", loginid);


  const handleDelete = () => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

    if (isConfirmed) {
      onDelete(data);
    } else {
      console.log("삭제가 취소되었습니다.");
    }

  };  
  
  const handleLike = () => {
    onLike(data);
    console.log(userId);
  }
  
  
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
    <Text text={churead}/>
    </div>
    {userId === loginid ? (
  <ItemButtons
    onDelete={handleDelete}
    churead={churead}
    userId={userId}
    edit={edit}
    loginid={loginid}
    data={data}
  />
) : null}
    </div>
    </div>
    <button type="button" onClick={handleLike}><img src="/images/heart.svg" alt="하트" />
  {likeCount}</button>
    </div>
  )
}
export default Item