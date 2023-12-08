const scriptURL = 'https://script.google.com/macros/s/AKfycbz8rGXkfvBeer90OnOKQZZ9ZV3wf8luGq8WIigThoS2BVZ1ztwJVrg54YuTv_FZ7XFe/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message))
})
var location = e.parameter.location;
