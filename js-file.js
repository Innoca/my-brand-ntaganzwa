var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0"
}

function hideMenu() {
    navLinks.style.right = "-200px"
}


// FORM VALIDATION

var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    if (!email) {
        emailError.textContent = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        emailError.textContent = "Invalid email address.";
    } else {
        emailError.textContent = "";
    }

    if (!password) {
        passwordError.textContent = "Password is required.";
    } else if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        isError = true; 
    } else {
        passwordError.textContent = "";
    }

    if (!emailError.textContent && !passwordError.textContent) {
        form.submit();
    }
});




// var form = document.getElementById("form");
// form.addEventListener("submit", validateForm);

// function validateForm(event) {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var emailError = document.querySelector(".error:nth-of-type(1)");
//   var passwordError = document.querySelector(".error:nth-of-type(2)");
//   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   var isError = false;

//   if (!emailRegex.test(email)) {
//     emailError.innerHTML = "Please enter a valid email address";
//     isError = true;
//   } else {
//     emailError.innerHTML = "";
//   }

//   if (password.length < 8) {
//     passwordError.innerHTML = "Password must be at least 8 characters long";
//     isError = true;
//   } else {
//     passwordError.innerHTML = "";
//   }

//   if (isError) {
//     event.preventDefault();
//   }
// }


// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
    
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// const validateInputs = () => {
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

   
//     if(emailValue === '') {
//         setError(email, 'Email is required')
//     } else if(!isValidEmail(emailValue)){
//         setError(email, 'Please provide a valid email address');
//     } else {
//         setSuccess(email)
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if(passwordValue.length < 8 ) {
//         setError(password, 'Password must be atlease 8 characters')
//     } else {
//         setSuccess(password);
//     }
// }



// Like button

    var btn = document.querySelector(".like-btn");
    var count = document.querySelector("#count");
    var icon = document.querySelector("#icon i");
    var likes = 0;

    btn.addEventListener("click", function(){
        likes++;
        count.innerHTML = likes + " Likes";
    });

    // CONTACT FORM INFO

    function send() {
        // Retrieving the data
        var userName = document.getElementById("user_name").value
        var userEmail = document.getElementById("user_email").value
        var subject = document.getElementById("subject_user").value
        var userMessage = document.getElementById("user_message").value

        // Storing the data
        var nameUser = localStorage.setItem("userName", userName)
        var emailUser = localStorage.setItem("userEmail", userEmail)
        var userSubject = localStorage.setItem("subject", subject)
        var messageUser = localStorage.setItem("userMessage", userMessage)

        // Retrieving stored data and using it for calulations
        var nameUser = localStorage.getItem("userName", userName)
        var emailUser = localStorage.getItem("userEmail", userEmail)
        var userSubject = localStorage.getItem("subject", subject)
        var messageUser = localStorage.getItem("userMessage", userMessage)

        var a,b,c;
        a= "aditiseal"
        b= 12345
        c= "aditiseal@gmail.com"
        d= "You know"

        if(a == nameUser && b == messageUser && c == emailUser && d == userSubject) {
            alert("Login successfully")
        } else {
            alert("Invalid details")
        }

    }
    


    // SIGN IN INFO

    function authentication(){
        // Retrieving data
        var signEmail = document.getElementById("email").value
        var signPsw = document.getElementById("password").value

        // Storing data
        var emailSign = localStorage.setItem("signEmail", signEmail)
        var pswSign = localStorage.setItem("signPsw", signPsw)

        // Retrieving stored data and using it for calulations
        var emailSign = localStorage.getItem("signEmail", signEmail)
        var pswSign = localStorage.getItem("signPsw", signPsw)

        
    }

    