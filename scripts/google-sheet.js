const form = document.getElementById('signup-form');
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; // Replace

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      alert('Signed up successfully!');
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});
