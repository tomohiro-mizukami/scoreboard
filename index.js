const scoreHome   = document.getElementById('scoreHome'),
      scoreGuest  = document.getElementById('scoreGuest'),
      add1Home    = document.getElementById('add1Home'),
      add2Home    = document.getElementById('add2Home'),
      add3Home    = document.getElementById('add3Home'),
      add1Guest   = document.getElementById('add1Guest'),
      add2Guest   = document.getElementById('add2Guest'),
      add3Guest   = document.getElementById('add3Guest')

let count = 0

// Home
add1Home.addEventListener('click', () => {
  count += 1
  scoreHome.textContent = count
})

add2Home.addEventListener('click', () => {
  count += 2
  scoreHome.textContent = count
})

add3Home.addEventListener('click', () => {
  count += 3
  scoreHome.textContent = count
})

// Guest
add1Guest.addEventListener('click', () => {
  count += 1
  scoreGuest.textContent = count
})

add2Guest.addEventListener('click', () => {
  count += 2
  scoreGuest.textContent = count
})

add3Guest.addEventListener('click', () => {
  count += 3
  scoreGuest.textContent = count
})