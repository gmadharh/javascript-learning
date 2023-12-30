const btn = document.querySelectorAll('button')
const counter = document.querySelector('.count')

console.log(counter)

btn.forEach((element) => {
  element.addEventListener('click', (ele) => {
    // check if clicking lower count button
    if (ele.target.innerHTML === 'LOWER COUNT') {
      counter.innerHTML = Number(counter.innerHTML) - 1
    }

    // else clicking add count button
    else {
      counter.innerHTML = Number(counter.innerHTML) + 1
    }

    // if number less than zero, set to red
    if (Number(counter.innerHTML) < 0) {
      counter.style.color = 'red'
    }

    // else if number greater than zero, set to green
    else if (Number(counter.innerHTML) > 0) {
      counter.style.color = 'green'
    }

    // else its 0, set to black
    else {
      counter.style.color = 'black'
    }
  })
})
