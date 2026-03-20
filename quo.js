const next = document.getElementById("next")
const quote_show = document.getElementById("quote_show")
const quote_type = document.getElementById("quote_type")
const language = document.getElementById("language")
const quote_type_show = document.getElementById("quote_type_show")


function mainfun(){

fetch("https://dummyjson.com/quotes/random")

.then(res => res.json())

.then(data => {
  console.log("Data mil gya : ",data)
quote_show.innerText = data.quote
quote_type_show.innerText = data.author

})

}

next.addEventListener("click",()=>{
    if(quote_type.value !="" && language.value !=""){
        mainfun()
    }
    else{
        alert("invalid ! select Quote Type and Language")
    }
})