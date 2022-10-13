import React from 'react'
import Edit from './Edit'

function Main({item,setpost,edited, post,editHendler,editName,editage},id) {
  const deleteHendler = () => {
    setpost(post.filter(el => {
      return item.id !== el.id
    }))
  }
  return (
    <div className='content'>
          <h1>{item.name}</h1>
          <span>{item.age}</span>
          <img src={item.img} alt="" />
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() =>edited(item)}>edit</button>
          <Edit editHendler={editHendler} editName={editName} editage={editage} item={item} id={id}/>
          <button onClick={deleteHendler}>delete</button>
          
        </div>
  )
}

export default Main