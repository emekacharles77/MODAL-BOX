const popup=document.querySelector('.popup')
const button1=document.querySelectorAll('button')[0]
const button2=document.querySelectorAll('button')[1]
// console.log(popup, button1,button2)

button1.addEventListener('click',()=>{
  function open(){
    popup.classList.add('popup-box')
  }
  open()
})

button2.addEventListener('click', ()=>{
    function close(){
        popup.classList.remove('popup-box')
      }
      close()
})
