const btn = document.querySelector('.btn')
const quote_area = document.querySelector('.quote_area')

btn.addEventListener('click', async () => {
  try {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()

    const new_advice = data.slip.advice

    quote_area.innerHTML = `<h3>${new_advice}</h3>`
  } catch (error) {}
})
