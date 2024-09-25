import React from 'react'

const UserImage = ({userProfileImage}) => {
  return (
    <img src={userProfileImage} alt="Logo" className='user-iamage' />
  )
}

export default UserImage