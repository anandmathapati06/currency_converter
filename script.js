import config from './config.js'
console.log("hello")

// const key = "cur_live_aDC4DJeWDzKkZAAht2nCzB3viIeusFUopDZ1vldz"
const url = `https://api.currencyapi.com/v3/latest`
let select = document.querySelectorAll(".api")
let first = document.getElementById("first")
let second = document.getElementById("second")
let answer = document.getElementById("answer")
let swap = document.querySelector(".swap")


let data = ""



async function main(){
    let resopnse = await fetch(url,{
        method: "GET",
        headers: {
          "apikey": config.API_KEY
        }})
    let dat = await resopnse.json()

  
    let daa = dat.data
    console.log(daa);
    return  daa
    }
    

const use = async  ()=>{
 data = await main()





 select.forEach( (e)=>{
    
      Object.keys(data).map((i)=>{
 
        
         e.innerHTML +=`<option value="${i}">${i}</option>`
        })
})
}
use() 



function T(){
    let divide  =  first.value/data[select[0].value].value
   let multiply = divide*data[select[1].value].value
   
second.value =  multiply
}

function bT(){
    let  divide  = second.value/data[select[1].value].value
    let multiply = divide*data[select[0].value].value
    first.value = multiply
}





first.addEventListener("input", ()=>{
    
    if(first.value < 0 ){
        alert("Bro, it's not your Bank Balance that you can watch in neagtive")
        first.value = ""
    }
    else
    {
        T()
    }
})

second.addEventListener("input",()=>{
    if(second.value < 0){
        alert("Bro, it's not your Bank Balance that you can watch in neagtive")
        second.value = ""
    }
    else
    {
   bT()
    }

})










swap.addEventListener("click",()=>{

        let temp
      temp =   select[0].value 
      
      select[0].value = select[1].value
      select[1].value = temp

      temp = first.value
      first.value = second.value
      second.value = temp
})


let button = document.querySelector(".button")

button.addEventListener("click",()=>{
    alert("HII Bro, My work in this page as your contribution to your DREAM")
    
})