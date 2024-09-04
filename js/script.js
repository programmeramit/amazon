start =  document.querySelector('.start')
stops = document.querySelector('.stop')
number =  document.getElementById('number')



let time = 10;
let elemnt
let interid
function starts(){
    time-=1
    elemnt.innerHTML = time
    if(time === 0){
        clearInterval(interid)
    }

    document.body.style.backgroundColor =`rgb(${Math.random()*200+1},${Math.random()*100+1},${Math.random()*100+1})`
}
function stop(){
    clearInterval()
}

start.addEventListener('click',()=>{
    if(number){
        time=parseInt(number.value)
    }
    interid = setInterval(starts,1000)

    elemnt = document.createElement('h1')
    elemnt.innerHTML="HELLO"
    elemnt.style.color = "white"
    document.body.append(elemnt)
    
})
stops.addEventListener('click',()=>{
    clearInterval(interid)
})