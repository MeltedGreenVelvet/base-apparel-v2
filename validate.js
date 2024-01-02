const emailCollector = document.getElementById("email-collector");
const email = document.getElementById("email");

emailCollector.addEventListener('submit', e => {
    e.preventDefault();
    validateEmail();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.add('errorColor');
    inputControl.classList.remove('success');
    inputControl.classList.remove('successColor');
    addErrorImage(inputControl);
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.add('successColor'); // Add successColor class to change the color
    inputControl.classList.remove('error');
    inputControl.classList.remove('errorColor');
    removeErrorImage(inputControl);
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const addErrorImage = (element) => {
    const img = document.createElement('img');
    img.src = 'images/icon-error.svg'; 
    img.alt = 'Validation Error';
    img.classList.add('icon-error');
    element.appendChild(img);
};

const removeErrorImage = (element) => {
    const errorImage = element.querySelector('.icon-error');
    if (errorImage) {
        element.removeChild(errorImage);
    }
};


const validateEmail = () => {
    const emailValue = email.value.trim();
    if (emailValue === '' || !isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email');
    } else {
        setSuccess(email);
        let successDisplay = document.getElementById("successMessage");
        successDisplay.textContent += "Thank you for subscribing to our newsletter.";
    }
}