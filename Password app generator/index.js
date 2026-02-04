
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const lowercase="abcdefghijklmnopqrstuvwxyz"

const number="0123456789"

const symbol="&(){}[]#*$!?%/+|µ=ç_èé£§ù@"

const allchars=uppercase+lowercase+number+symbol

let InputChoice=document.getElementById("input-choice")
let password1EL=document.getElementById("password1")
let password2EL=document.getElementById("password2")
let resultMessage=document.getElementById("result")

function generatePassword1(){
  if(InputChoice.value<4 || InputChoice.value>20 || InputChoice.value===""){
     resultMessage.textContent="\"Erreur !! Entrez une valeur comprise entre 4 et 20\"."
     password1EL.value=""
  }else{
  const length=InputChoice.value
  password=""
  for(i=0; i<length;i++){
    password+=allchars[Math.floor(Math.random()* allchars.length)]
    password1EL.value=password
  }
  }
}

function generatePassword2(){
  if(InputChoice.value<4 || InputChoice.value>20 || InputChoice.value===""){
     resultMessage.textContent="\"Erreur !! Entrez une valeur comprise entre 4 et 20\"."
     password1EL.value=""
  }else{
  const length=InputChoice.value
  password=""
  for(i=0; i<length;i++){
    password+=allchars[Math.floor(Math.random()* allchars.length)]
    password2EL.value=password
  }
  }
  
}

function generate(){
  generatePassword1();
  generatePassword2();
}

function copyPassword1(){
  password1EL.select();
  document.execCommand("copy");
  copy1.addEventListener("click", ()=>{
  msg.textContent=""+"Copié !";
  msg.style.display="block";

  setTimeout(()=>{
    msg.style.display="none";
  },2000);
  })
}
function copyPassword2(){
   password2EL.select();
   document.execCommand("copy");
};
copy2.addEventListener("click", ()=>{
  msg.textContent="Copié !";
  msg.style.display="block";

  setTimeout(()=>{
    msg.style.display="none";
  },2000);
  })


























