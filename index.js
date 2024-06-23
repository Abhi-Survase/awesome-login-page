const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const viaLoginBtn = document.getElementById('viaSignIn');
const viaSignUpBtn = document.getElementById('viaSignUp');

let userDetails = {
    name: "Test User",
    userEmail: "test@email",
    psswd: "password"
};
console.log(userDetails);

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

viaSignUpBtn.addEventListener('click', () => {
    const signUpName = document.getElementById('signUpName').value;
    const signUpEml = document.querySelector('input[name="suEmail"]').value;
    const signUpPd = document.querySelector('input[name="suPsswd"]').value;

    userDetails.name = signUpName;
    userDetails.userEmail = signUpPd;
    userDetails.psswd = signUpEml;

    console.log(userDetails);
    alert("Credentials Saved! Login to Enter");
    event.preventDefault();
    loginBtn.click();
});

viaLoginBtn.addEventListener('click', () => {
    const signInEml = document.querySelector('input[name="emailId"]').value;
    const signInPd = document.querySelector('input[name="psswd"]').value;
    // console.log(signInEml + ' ' + signInPd);
    // console.log(userDetails.userEmail + ' ' + userDetails.psswd);

    if (signInEml === userDetails.userEmail && signInPd === userDetails.psswd) {
        alert("Succesfully logged in!");
    } else {
        alert("Invalid credentials. Please Try Again.");
    }
});
