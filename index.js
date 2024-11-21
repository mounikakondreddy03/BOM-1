let name = document.getElementById("userName")
let password = document.getElementById("userPswd")
let email = document.getElementById("userEmail")
let signupBtn = document.getElementById("btn")

signupBtn.addEventListener ("click", (e) => {
    e.preventDefault()
    const nameValue = name.value
    const passwordValue = password.value
    const emailValue = email.value
    localStorage.setItem("name", nameValue)
    localStorage.setItem("password", passwordValue)
    localStorage.setItem("email", emailValue)
    alert("signup successfully!!!!!!!!!!")
    setTimeout(() => {
        window.location.href = "login.html"
    },2000)
})


const loginBtn = document.getElementById("btn")

loginBtn.addEventListener("click", () => {
    let nameStorage = localStorage.getItem("name")
    let passwordStorage = localStorage.getItem("password")
    let inputUserName = document.getElementById("userName").value
    let inputUserpswd = document.getElementById("userPswd").value

    if (nameStorage == inputUserName && passwordStorage == inputUserpswd) {
        alert("login successfully!!!!!!")
        setTimeout (() => {
            window.open("home.html")
        },4000)
    } else {
        alert("invalid username or password!!!!!!")
    }
})