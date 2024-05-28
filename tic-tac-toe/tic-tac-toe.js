let main=document.getElementById('main')
let player1=true
let arr=[null,null,null,null,null,null,null,null,null]
let result=document.getElementById('result')
let line=document.querySelector('hr')
let lineClass=['one-v','two-v','three-v','one-h','two-h','three-h','one-d','three-d'];
let isWin=()=>{
    for(let i=0;i<3;i++){
        if (arr[i]!=null && arr[i]==arr[i+3] && arr[i+3]==arr[i+6]) {
            line.classList.add(`${lineClass[i]}`)
            return true
        }
    }
    for(var i=0;i<7;i+=3){
        if (arr[i]!=null && arr[i]==arr[i+1] && arr[i+1]==arr[i+2]) {
            let className=3+(i/3)
            line.classList.add(`${lineClass[className]}`)

            return true
        }
    }
    if (arr[0]!=null && arr[0]==arr[4] && arr[4]==arr[8]) {
        line.classList.add('one-d')
        return true
    }
    if (arr[2]!=null && arr[2]==arr[4] && arr[4]==arr[6]) {
        line.classList.add('three-d')
        return true
    }
    return false
}
let fill=(event)=>{
    if (event.target.classList.contains('box') && event.target.innerText=='') {
        if (player1) {
            event.target.innerText='0'
            arr[event.target.getAttribute('data-no')]=0
            if (isWin()) {
                result.innerText='Player-1 won the match!'
                main.removeEventListener('click',fill)
            }
        }
        else{
            event.target.innerText='x'
            arr[event.target.getAttribute('data-no')]=1
            if (isWin()) {
                result.innerText='Player-2 won the match!'
                main.removeEventListener('click',fill)
            }
        }
        player1=!player1
    }
}
main.addEventListener('click',fill)