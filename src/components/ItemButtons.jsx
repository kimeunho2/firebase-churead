import React from 'react'



const ItemButtons = ({onDelete, edit, text, id}) => {

const handleEdit = () => {
  edit(text, id);

  console.log(text, id);

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