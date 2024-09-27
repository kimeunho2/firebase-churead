import React from 'react'



const ItemButtons = ({onDelete, edit, churead, userId}) => {

const handleEdit = () => {
 
  edit(churead, userId); //HomeLogin의 edit 함수 실행



}   


const handleDelete = () => {
  onDelete()
}
  
  return (
    <div className='itemButtons'>
      <img src="/images/pencil.svg" alt="Logo" className='logo itemButton' onClick={handleEdit}/>
      <img src="/images/TrashCan.svg" alt="Logo" className='logo itemButton' onClick={handleDelete}/>
    </div>
  )
}

export default ItemButtons