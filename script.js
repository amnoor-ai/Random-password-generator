const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".fa-copy")
const alertContainerEl = document.querySelector(".alertContainer")

btnEl.addEventListener("click", ()=> {
    createPassword()
})

copyIconEl.addEventListener("click", ()=> {
    copyPassword()
})

function createPassword(){
    const chars = "123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14;
    let password = ""
    for (let index = 0;  index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
    }    inputEl.value = password;

}

function copyPassword() {
    if (inputEl.value) { 
        inputEl.select();
        inputEl.setSelectionRange(0, 9999);
        
        navigator.clipboard.writeText(inputEl.value).then(() => {
            alertContainerEl.innerText = inputEl.value + " copied!";
            alertContainerEl.classList.add("active");
            setTimeout(() => {
                alertContainerEl.classList.remove("active");
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
}