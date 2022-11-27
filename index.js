let tabBtn = document.querySelector('#tab-btn')
let deleteBtn = document.querySelector('#delete-btn')
let saveBtn = document.querySelector('#save-btn')
let inputEl = document.querySelector('#input-el')
let listOfLeadsFrontEnd = document.querySelector('#ul-el')


tabBtn.addEventListener('click', saveTab)
deleteBtn.addEventListener('click', deleteAll)
saveBtn.addEventListener('click', saveInput)


let listOfLeads = []


function addToFrontEndList(leads){
    listOfLeads.forEach((element) => {
        let li = document.createElement('li')
        li.innerHTML = `<a href="${element}">${element}</a>`
        listOfLeadsFrontEnd.appendChild(li)
    });
}


function saveTab(){
    chrome.tabs.query({
        active:true,
        currentWindow:true
    }, 
    
    function(tabs){
    let activeTab = tabs[0].url
    listOfLeads.push(activeTab)
    localStorage.setItem('myLeads', JSON.stringify(listOfLeads))
    addToFrontEndList(listOfLeads)
})
}
  

function saveInput(){
    listOfLeads.push(inputEl.value)
    localStorage.setItem('myLeads', JSON.stringify(listOfLeads))
    addToFrontEndList([listOfLeads])
    clearInput()
}


function clearInput(){
    inputEl.value = ""
}


function deleteAll(){
    listOfLeads = []
    listOfLeadsFrontEnd.innerHTML = ''
    localStorage.clear()
}