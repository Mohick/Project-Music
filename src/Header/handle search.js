
async function handleSearch(discover,tag) {
    const value = tag.value
    const boxDropdown = document.getElementById("header__dropdown__search--item")
    const filterItems =  discover.filter((item) => {
        return (""+item.titleMusical).toLocaleLowerCase().trim().includes((""+value).toLocaleLowerCase().trim())
    })
   const items = filterItems.slice(0,6).reduce((valueStart,value)=>{
    return valueStart + `
    <a href="/song/${value.titleMusical}/${value._id}" class="py-2 border-b-2 font-bold capitalize border-solid border-black-400 block">
    ${value.titleMusical}
  </a>
    `
   },'')
   console.log(boxDropdown);
 if(items.length > 0) {
    boxDropdown.classList.add("block")
    boxDropdown.classList.remove("hidden")
    boxDropdown.innerHTML = `<div class="p-1">
    ${items}
    </div>`
 }else {
    boxDropdown.classList.add("hidden")
    boxDropdown.classList.remove("block")
    boxDropdown.innerHTML = ``
 }
}
async function offDropDownSearch(tag) {
    const boxDropdown = document.getElementById("header__dropdown__search--item")
setTimeout(() => {
    
    boxDropdown.classList.add("hidden")
    boxDropdown.classList.remove("block")
    boxDropdown.innerHTML = ``
}, 100);
 
}

async function btnSearch(tag) {
    const inputSearch = document.getElementById("header__search--item")
    if(inputSearch.value.length > 0) {
        window.location.pathname= `search/${inputSearch.value}`
    }else {
        inputSearch.focus()
    }
}
async function btnSearchMobi(tag) {
    const inputSearch = document.getElementById("header__search--item--mobi")
    if(inputSearch.value.length > 0) {
        window.location.pathname= `search/${inputSearch.value}`
    }{
        inputSearch.focus()
    }
}
export {handleSearch,offDropDownSearch,btnSearch,btnSearchMobi}