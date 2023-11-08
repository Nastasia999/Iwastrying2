const x=document.getElementById("x");
const y=document.getElementById("y");
const answer=document.getElementById("result");
const elementVerify=document.getElementById("verify");

function verify() {
    const x1= +x.value;
    const y1= +y.value;
    const result =1/(x1*y1);
    answer.innerText =result;
}
elementVerify.addEventListener('click', verify);
