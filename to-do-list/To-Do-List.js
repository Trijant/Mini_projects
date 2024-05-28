let addNote=(event)=>{
    event.preventDefault('off')
    if(input.value){
        let newNote=document.createElement('div');
        let deleteNote=document.createElement('button')
        let text=document.createElement('div');
        text.innerText=input.value
        input.value=''
        newNote.className='newNote'
    text.className='text'
    deleteNote.classList.add('delete','btn')
    deleteNote.innerText='Delete'
    newNote.append(text,deleteNote)
    container.append(newNote)
}
}
let del=(e)=>{
    e.preventDefault()
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
}
let show=(e)=>{
    if(e.target.classList.contains('text')){

        let showContainer=document.createElement('div')
        showContainer.classList.add('show')
        showContainer.innerText=e.target.innerText
        showContainer.append(backButton)
        body.append(showContainer)
        main.style='height:50px;overflow:hidden;'
    }
}
let back=(e)=>{
    console.log(e)
    backButton.parentElement.remove()
    main.style='height:auto'
}

let input=document.getElementById('input')
let Add=document.getElementById('Add')
let container=document.getElementById('container')
let deleteNote=document.querySelectorAll('delete')
let main=document.getElementById('main')
let body=document.querySelector('body')
let backButton=document.createElement('button')
backButton.classList.add('btn','back')
backButton.innerText='Back'

Add.addEventListener('click',addNote)
container.addEventListener('click',del)
container.addEventListener('click',show)
backButton.addEventListener('click',back)
