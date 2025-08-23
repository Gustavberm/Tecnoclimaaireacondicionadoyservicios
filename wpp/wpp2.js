const name2 = document.querySelector('#name2');
const email2 = document.querySelector('#email2');
const subject2 = document.querySelector('#subject2');
const message2 = document.querySelector('#message2');
const send2 = document.querySelector('#send2');

var mensaje;
function enviar(){
    mensaje = ` https://api.whatsapp.com/send?phone=541161185354&text=${name2.value}%20${email2.value}%20${subject2.value}%20${message2.value}`;
    send2.href= mensaje;
}