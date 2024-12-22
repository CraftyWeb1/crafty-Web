/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServiceID - templateID - #form -publickey
    emailjs.sendForm('service_glebdrn','template_rbpnrxi','#contact-form','wwQbGIu6lslGWuwd7')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear input fields
            contactForm.reset()

        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail);