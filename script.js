

const scriptURL = 'https://script.google.com/macros/s/AKfycby6_IVVfYmYGSZCJt7y-mqz5PDTYXDCwpMXYdMAK3mfKTfOnCkcdVRwcdeE3XmEEufjRw/exec'

const form = document.forms['mentorForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    const thankYouPageURL = 'thank-you.html'; // Your thank-you page URL
    window.location.href = thankYouPageURL;
  })
  .catch(error => console.error('Error!', error.message))
})