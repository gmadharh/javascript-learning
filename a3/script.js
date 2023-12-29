const input_field = document.querySelector('#input-field')
const submit_button = document.querySelector('.submit-btn')
const sent_field = document.querySelector('.sent-message')

submit_button.addEventListener('click', () => {
  console.log(input_field.value)
  sent_field.innerHTML = `${input_field.value}`
})
