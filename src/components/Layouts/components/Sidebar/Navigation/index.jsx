import React from 'react'
import navLists from './data'

const Navigation = () => {
    return (
        <div className="siderbar-nav">
            <div className="nav-item">
                {navLists.map((item, index) => {
                    return (
                        <a href={item.path} key={index}>
                            <i className={item.icon}></i>
                            <span>{item.name}</span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation