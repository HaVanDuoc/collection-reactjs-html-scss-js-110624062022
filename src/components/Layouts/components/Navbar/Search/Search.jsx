import { useState } from 'react';
import autocompleteItems from './autocompleteItems'


const Search = () => {
  const [active, setActive] = useState(true);

  const hanldeClick = (e) => {

    const autocomplete = (input, array) => {
      // let currentFocus;

      input.addEventListener('input', function (e) {

        let tagParent, tagChild, tagI, tagSpan, i;
        var val = this.value;

        closeAllLists();

        if (!val) {
          return false;
        }

        // currentFocus = -1;

        // create a DIV element that will contain the items
        tagParent = document.createElement("div")
        tagParent.setAttribute('id', this.id + '-auto-complete')
        tagParent.setAttribute("class", active ? "auto-complete active" : "auto-complete")
        this.parentNode.appendChild(tagParent);

        // for each item in the array
        for (i = 0; i < array.length; i++) {
          if (array[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {

            // setActive(true)
            // console.log(active);

            // create a DIV element for matching element
            tagChild = document.createElement('DIV');
            tagChild.setAttribute('className', "item")
            tagI = document.createElement('I');
            tagI.setAttribute('class', "fa-solid fa-magnifying-glass")
            tagSpan = document.createElement('SPAN');
            tagSpan.setAttribute('className', "info")

            tagChild.appendChild(tagI);
            tagChild.appendChild(tagSpan)
            tagSpan.innerHTML = "<strong>" + array[i].substr(0, val.length) + "</strong>"
            tagSpan.innerHTML += array[i].substr(val.length)
            tagSpan.innerHTML += "<input type='hidden' value='" + array[i] + "'>";

            // 
            tagChild.addEventListener('click', function (e) {
              input.value = this.getElementsByTagName('input')[0].value;
              closeAllLists();
            })

            tagParent.appendChild(tagChild)
          }
        }

      })

      // function addActive(x) {
      //   setActive(true);
      //   /*a function to classify an item as "active":*/
      //   if (!x) return false;
      //   /*start by removing the "active" class on all items:*/
      //   removeActive(x);
      //   if (currentFocus >= x.length) currentFocus = 0;
      //   if (currentFocus < 0) currentFocus = (x.length - 1);
      //   /*add class "autocomplete-active":*/
      // }
      // function removeActive(x) {
      //   /*a function to remove the "active" class from all autocomplete items:*/
      //   for (var i = 0; i < x.length; i++) {
      //     x[i].classList.remove("autocomplete-active");
      //   }
      // }

      const closeAllLists = (element) => {
        var x = document.getElementsByClassName('auto-complete');
        for (let i = 0; i < x.length; i++) {
          if (element !== x[i] && element !== input) {
            x[i].parentNode.removeChild(x[i])
          }
        }
      }
    }

    autocomplete(document.getElementById('hvdInput'), autocompleteItems)
  }

  return (
    <form className='hvd-search'>
      <i className="fa-solid fa-magnifying-glass icon-search"></i>
      <input id='hvdInput' type="text" onClick={hanldeClick} placeholder='Tìm kiếm trên Collection' />
      {/* <div className={active ? "auto-complete active" : "auto-complete"}>

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

      </div> */}
    </form >
  )
}

export default Search;