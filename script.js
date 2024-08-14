const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clikTime = 0
let timesClick = 0

loveMe.addEventListener('click', (e) => {
  if (clikTime === 0) {
    clikTime = new Date().getTime()
  } else if (new Date().getTime() - clikTime < 800) {
    createHeart(e)
    clikTime = 0
  } else {
    clikTime = new Date().getTime()
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX
  const y = e.clientY

  const leftOffSet = e.target.offsetLeft
  const topOffSet = e.target.offsetTop

  const inSideX = x - leftOffSet
  const inSideY = y - topOffSet

  console.log(inSideX, inSideY)

  heart.style.top = `${inSideY}px`
  heart.style.left = `${inSideX}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++timesClick

  setTimeout(() => heart.remove(), 1000)
}
