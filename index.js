const scoreHome   = document.getElementById('scoreHome'),
      scoreGuest  = document.getElementById('scoreGuest'),
      addHome     = document.querySelectorAll('.add-home'),
      addGuest    = document.querySelectorAll('.add-guest')
      
let   countHome   = 0,
      countGuest  = 0

addHome.forEach((element, i) => {
  element.addEventListener('click', () => {
    countHome += i+1
    scoreHome.textContent = countHome
  })
})

addGuest.forEach((element, i) => {
  element.addEventListener('click', () => {
    countGuest += i+1
    scoreGuest.textContent = countGuest
  })
})
