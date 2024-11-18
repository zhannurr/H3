// Element Selectors
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');
const submitSignUp = document.getElementById('submitSignUp');
const submitSignIn = document.getElementById('submitSignIn');

// Toggle between forms
signUpButton.addEventListener('click', () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', () => {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

// Form Submit Handlers
submitSignUp.addEventListener('click', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('fName').value.trim();
    const lastName = document.getElementById('lName').value.trim();
    const email = document.getElementById('rEmail').value.trim();
    const password = document.getElementById('rPassword').value.trim();

    if (!validateSignUpForm(firstName, lastName, email, password)) {
        return;
    }

    if (confirm('Are you sure you want to sign up with this information?')) {
        saveUserData(firstName, lastName, email, password);
        alert('Sign Up Successful! You can now sign in.');
        signUpForm.style.display = "none";
        signInForm.style.display = "block";
    }
});

submitSignIn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    const user = authenticateUser(email, password);
    if (user) {
        localStorage.setItem('loggedInUser', email);
        alert('Sign In Successful!');
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password.');
    }
});

// Validation Functions
function validateSignUpForm(firstName, lastName, email, password) {
    if (!firstName || !lastName || !email || !password) {
        alert('Please fill out all fields.');
        return false;
    }

    if (/\d/.test(firstName) || /\d/.test(lastName)) {
        alert('First name and last name cannot contain numbers.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one special character.');
        return false;
    }

    return true;
}

// Save user data to localStorage
function saveUserData(firstName, lastName, email, password) {
    const userData = {
        firstName,
        lastName,
        email,
        password,
    };

    const existingUsers = JSON.parse(localStorage.getItem('usersData')) || [];
    existingUsers.push(userData);
    localStorage.setItem('usersData', JSON.stringify(existingUsers));
}

// Authenticate user during sign in
function authenticateUser(email, password) {
    const users = JSON.parse(localStorage.getItem('usersData')) || [];
    return users.find(user => user.email === email && user.password === password);
}
