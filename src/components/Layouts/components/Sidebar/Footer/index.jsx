import React, { Fragment } from 'react'
import contactList from './data'

const Footer = () => {
    return (
        <Fragment>
            <div className="sidebar-footer">
                <div className="title">Liên hệ</div>
                {contactList.map(item => {
                    return (
                        <div className="item">
                            <p className='name'>{item.name}</p>
                            <p className='mail'>{item.mail}</p>
                        </div>
                    )
                })}
            </div>
            <div className="sidebar-footer">
                {contactList.map(item => {
                    return (
                        <div className="item">
                            <p className='eula'>{item.info}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Footer