

async function includeHeader() {
    const headerContainer = document.getElementById('header-container');
    const response = await fetch('header.html');
    const html = await response.text();
    headerContainer.innerHTML = html;
}

includeHeader();

async function includeFooter() {
    const footerContainer = document.getElementById('footer-container');
    const response = await fetch('footer.html');
    const html = await response.text();
    footerContainer.innerHTML = html; // Corrigido para footerContainer
}

includeFooter();

function validateForm() {
    document.getElementById('erroName').style.display = "none";
    document.getElementById('erroEmail').style.display = "none";
    document.getElementById('erroPhone').style.display = "none";
    document.getElementById('erroSubject').style.display = "none";
    document.getElementById('erroMessage').style.display = "none";

    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;


    let isValid = true;

    if (fullName === "") {
        document.getElementById('erroName').style.display = "block";
        isValid = false;
    }
    if (email === "") {
        document.getElementById('erroEmail').style.display = "block";
        isValid = false;
    }
    if (phone === "") {
        document.getElementById('erroPhone').style.display = "block";
        isValid = false;
    }
    if (subject === "") {
        document.getElementById('erroSubject').style.display = "block";
        isValid = false;
    }
    if (message === "") {
        document.getElementById('erroMessage').style.display = "block";
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('erroEmail').style.display = "block";
        isValid = false;
    }

    const phonePattern = /^[0-9]{2}[0-9]{5}[0-9]{4}$/;
    if (phone !== "" && !phonePattern.test(phone)) {
        document.getElementById('erroPhone').style.display = "block";
        isValid = false;
    }
    return isValid;
}

function catchForm(){
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);


    const fullName = urlParams.get('fullName');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const subject = urlParams.get('subject');
    const message = urlParams.get('message');
    const contactPreference = urlParams.get('contactPreference');

    const infos = `${fullName}/${email}/${phone}/${subject}/${message}/${contactPreference}`;

    return { fullName, email, phone, subject, message, contactPreference };
}

console.log(catchForm())

function getFirstName(){
    const userDetails = catchForm();
    const arrayName = userDetails.fullName.trim().split(" ");
    const firstName = arrayName[0]

    return firstName;  
}

getFirstName();

function displayFirstName() {
    const firstName = getFirstName();
    const txtFormAction = document.querySelector(".txtFormAction #txt-js");
    txtFormAction.textContent = `${firstName}!`;
}

displayFirstName();


