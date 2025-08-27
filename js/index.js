



let num = 0


const heartclass = document.getElementsByClassName('hart-add-btn')

for (let heart of heartclass) {
    heart.addEventListener('click', function (e) {
        e.preventDefault()
        e.preventDefault()
        num++

        let heartCoin = parseInt(getbyid('heart-coin').innerText = num)
    })
}
  let COIN = 20
const callbtn = document.getElementsByClassName('call-cart')
for (let call of callbtn) {
    call.addEventListener('click', function (e) {

        e.preventDefault()
       const number = call.parentNode.parentNode.childNodes[5].childNodes[1].innerText
       const title = call.parentNode.parentNode.childNodes[3].childNodes[1].innerText
      



       const cartContainer  =  getbyid('cart-container')
       const displaycoin = getbyid('coin')
       let dicrescingCon = parseInt( displaycoin.innerText  )
   
    

      const div = document.createElement('div')
     div.classList = 'mt-10 flex justify-between items-center'
       
       div.innerHTML = `

        
                     <div >
                        <h1 class="font-bold text-xl">${title}</h1>
                        <p class="sm mt-2 font-normal text-[#5c5c5c]">${number}</p>
                     </div> 
                     <p class="text-md">${new Date().toLocaleTimeString()}</p>
               
       
       `

       
    if(dicrescingCon > 19 ){

               alert(innerHTML=`${title} 
${number}
          `
       )
        dicrescingCon -= 20

       displaycoin.innerText = dicrescingCon
      
       cartContainer.appendChild(div)
      


     }
     else{
        alert(" You don't have enough Coin")
     }


    })
}

const copyCart = document.getElementsByClassName('copy-cart')

for(let copy of copyCart){
    copy.addEventListener('click', function(e){
         e.preventDefault()
        //  step 1
         const titleElement = copy.parentNode.parentNode.childNodes[3].childNodes[1]
         
         //  step 2 
         
         const titleText = titleElement.innerText
         

        navigator.clipboard.writeText(titleText)

        .then(()=>{
            alert("coped:" +  titleText)
        })
        
    })
}


document.getElementById('clear-btn').addEventListener('click', function(e){

    e.preventDefault()

    const cartContainer  =  getbyid('cart-container')
     cartContainer.innerHTML = ''
   
    
   
})

