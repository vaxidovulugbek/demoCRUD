import React from 'react'

function Edit({editHendler,editName,editage,item,id}) {
  return (
    <div>
      {
          <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                {/* {
                  item.map(el => {
                    if (el.id === id ) { */}
                    <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <input type="text" placeholder='editname' onChange={editName}/>
                      <input type="number" placeholder='edit age' onChange={editage}/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={editHendler}>Save changes</button>
                    </div>
                  </div>
                    {/* }
                    
                  })
                } */}
                
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Edit