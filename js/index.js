



let coin = 0


const heartclass = document.getElementsByClassName('hart-add-btn')

for (let heart of heartclass) {
    heart.addEventListener('click', function (e) {
        e.preventDefault()
        e.preventDefault()
        coin++

        let heartCoin = parseInt(getbyid('heart-coin').innerText = coin)
    })
}

const callbtn = document.getElementsByClassName('call-cart')
for (let call of callbtn) {
    call.addEventListener('click', function (e) {

        e.preventDefault()
       const number = call.parentNode.parentNode.childNodes[5].childNodes[1].innerText
       const title = call.parentNode.parentNode.childNodes[3].childNodes[1].innerText
      

       alert(innerHTML=`${title} 
${number}
          `
       )

      const cartContainer  =  getbyid('cart-container')
      console.log(cartContainer)

      const div = document.createElement('div')
     div.classList = 'mt-10 flex justify-between items-center'
       
       div.innerHTML = `

        
                     <div >
                        <h1 class="font-bold text-xl">${title}</h1>
                        <p class="sm mt-2 font-normal text-[#5c5c5c]">${number}</p>
                     </div> 
                     <p class="text-md">${new Date().toLocaleTimeString()}</p>
               
       
       `
   cartContainer.appendChild(div)

    })
}

