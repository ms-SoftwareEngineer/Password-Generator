const length = document.querySelector("#pwd_length");
const range = document.querySelector("#interval");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const password3 = document.querySelector("#password3");
const password4 = document.querySelector("#password4");
length.textContent = range.value;
function getValue(){
    length.textContent = range.value;
}

range.addEventListener("input",getValue);

function generatePasswords(){
    const characters = [0,1,2,3,4,5,6,7,8,9,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','!', '#', '$', '%', '&', '*', '+'];
    // Generating random Indices
    const random1 = [];
    for(let i= 0; i < range.value; i++){
        let randomNum = Math.floor(Math.random()*characters.length);
        random1.push(randomNum);
    }
    // Password1
    let pwd1 = "";
    for(let i = 0; i < range.value; i++){
        pwd1 += characters[random1[i]];
    }
    password1.textContent = pwd1;

    // Generating random Indices
    const random2 = [];
    for(let i= 0; i < range.value; i++){
        let randomNum = Math.floor(Math.random()*characters.length);
        random2.push(randomNum);
    }
    // Password2
    let pwd2 = "";
    for(let i = 0; i < range.value; i++){
        pwd2 += characters[random2[i]];
    }
    password2.textContent = pwd2;

    // Generating random Indices
    const random3 = [];
    for(let i= 0; i < range.value; i++){
        let randomNum = Math.floor(Math.random()*characters.length);
        random3.push(randomNum);
    }
    // Password3
    let pwd3 = "";
    for(let i = 0; i < range.value; i++){
        pwd3 += characters[random3[i]];
    }
    password3.textContent = pwd3;

    // Generating random Indices
    const random4 = [];
    for(let i= 0; i < range.value; i++){
        let randomNum = Math.floor(Math.random()*characters.length);
        random4.push(randomNum);
    }
    // Password4
    let pwd4 = "";
    for(let i = 0; i < range.value; i++){
        pwd4 += characters[random4[i]];
    }
    password4.textContent = pwd4;
}

const passwords = document.querySelectorAll(".password");
passwords.forEach((text,index) =>{
    text.addEventListener("click",(e) =>{
        // Copies the text
        navigator.clipboard.writeText(text.textContent);
        const copy = document.querySelector(".copy");
        if(text.textContent !== ""){
            copy.style.visibility = "visible";
        }
        // Set timeout to hide
        setTimeout(() => {
            copy.style.visibility = "hidden";
        },350)        
    })
})


