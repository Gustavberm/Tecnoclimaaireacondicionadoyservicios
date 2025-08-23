const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const send = document.querySelector('#send');

var mensaje;
function enviar(){
    mensaje = `https://api.whatsapp.com/send?phone=543764661611&text=${name.value}%20${email.value}%20${subject.value}%20${message.value}` ;
    send.href= mensaje;
}