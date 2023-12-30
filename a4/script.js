const btn = document.querySelectorAll('button')
const counter = document.querySelector('.count')

console.log(counter)

btn.forEach((element) => {
  element.addEventListener('click', (ele) => {
    if (ele.target.innerHTML === 'LOWER COUNT') {
      counter.innerHTML = Number(counter.innerHTML) - 1
    } else {
      counter.innerHTML = Number(counter.innerHTML) + 1
    }
  })
})
