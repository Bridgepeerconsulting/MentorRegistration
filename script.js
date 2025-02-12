

const scriptURL = 'https://script.google.com/macros/s/AKfycby6_IVVfYmYGSZCJt7y-mqz5PDTYXDCwpMXYdMAK3mfKTfOnCkcdVRwcdeE3XmEEufjRw/exec'

const form = document.forms['mentorForm']

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = fetch(scriptURL, { method: 'POST', body: new FormData(form) });

    // Redirect after a very short delay (even if fetch isn’t done yet)
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 100); // 300ms delay

    await response;
  } catch (error) {
    console.error('Error!', error.message);
  }
});
