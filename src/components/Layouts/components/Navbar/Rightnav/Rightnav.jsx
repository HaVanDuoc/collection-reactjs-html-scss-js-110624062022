import React from 'react'
import itemsRightnav from './itemsRightnav'

const Rightnav = () => {
  return (
    <div className='hvd-rightnav'>
      {/* <div className="item">
        <i class="fa-solid fa-pen-clip"></i>
      </div>
      <div className="item">
        <i class="fa-regular fa-bell"></i>
      </div>
      <div className="item">
        <i class="fa-regular fa-user"></i>
      </div> */}

      {itemsRightnav.map((item, index) => {
        return (
          <div className="item" key={index}>
            {item.icon}
          </div>
        )
      })}
    </div>
  )
}

export default Rightnav