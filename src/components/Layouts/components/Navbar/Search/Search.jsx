import React, { Fragment, useState } from 'react'
import autocompleteItems from './autocompleteItems'

const Search = () => {
  const [active, setActive] = useState(false);

  // Array
  // const autocompleteItems = [
  //   "Cobol",
  //   "JavaScript",
  //   "Basic",
  //   "PHP",
  //   "Java",
  // ];

  const hanldeClick = (e) => {
    setActive(!active)

    // let valueEntered = e.target.value; // user entered data
    // let emptyArray = [];

    // if (valueEntered) {
    //   emptyArray = autocompleteItems.filter((item) => {
    //     return item.toLocaleLowerCase().startsWith(valueEntered.toLocaleLowerCase())
    //   });

    //   emptyArray = emptyArray.map((item) => {
    //     return item =
    //       '<div className="item"' +
    //       '<i className="fa-solid fa-magnifying-glass"></i>' +
    //       '<span className="info">'
    //       + item +
    //       '</span>' +
    //       '<i className="fa-solid fa-xmark"></i>' +
    //       '</div>'
    //   });
    //   console.log(emptyArray);



    // }

  }
  return (
    <form className='hvd-search'>
      <i className="fa-solid fa-magnifying-glass  icon-search"></i>
      <input id='input-search' type="text" onClick={hanldeClick} placeholder='Tìm kiếm trên Collection' />
      <div className={active ? "auto-complete active" : "auto-complete"}>

        {autocompleteItems.map((item, index) => {
          return (
            <div className="item" key={index}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className='info'>
                {item.name}
              </span>
              <i className="fa-solid fa-xmark"></i>
            </div>
          )
        })}

      </div>
    </form >
  )
}

export default Search;