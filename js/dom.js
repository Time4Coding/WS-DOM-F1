var Name = document.querySelector('#name')
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
//console.log(Name)
console.log(passwordValidation)
//**************** Name must be at least 5 characters************* */
Name.addEventListener("change", function () {
    if (Name.value.length < 5) {
        alert("the name must be more than 5 characters")
        Name.focus()
        //Name.style.borderColor = "red"
        //-----------------------------
        //borber color with Bootstrap 
        Name.classList.add("is-invalid")
    } else {
        Name.removeAttribute("style")
        Name.classList.remove("is-invalid")
    }
})

//**************** email must be include "@" ************* */
console.log(email)
email.addEventListener("change", function () {
    if ((!email.value.includes('@gmail.com'))) {
        alert("you must enter a valid email")
        email.focus()
        email.classList.add("is-invalid")
    } else {
        email.removeAttribute("style")
        email.classList.remove("is-invalid")
    }
})

//**************** Password validation ************* */

password.addEventListener("change", function () {
    if (!passwordValidation.test(password.value)) {
        alert("you must enter a valid password")
        password.focus()
        password.classList.add("is-invalid")
    } else {
        password.removeAttribute("style")
        password.classList.remove("is-invalid")
    }
})