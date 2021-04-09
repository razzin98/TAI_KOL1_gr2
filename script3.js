let i=0;
let email, topic, message, showEmail, showTopic, showMessage, isSend, cause;

function showClass() {
    i++;
    for (let el of document.querySelectorAll('.d-none')) el.classList.add('MyClass'), el.classList.remove('d-none');
    document.getElementById('click-counter').textContent=i;

    email=document.querySelector('.form-email');
    topic=document.querySelector('.form-topic');
    message=document.querySelector('.text-area-message');

    showEmail=document.querySelector('.show-email');
    showTopic=document.querySelector('.show-topic');
    showMessage=document.querySelector('.show-message');
    isSend=document.querySelector('.isSend');
    cause=document.querySelector('.cause');

    showEmail.textContent=email.value;
    showTopic.textContent=topic.value;
    showMessage.textContent=message.value;
    if(showEmail.textContent.length===0 || showTopic.textContent.length===0 || showMessage.textContent.length===0 ){
        isSend.textContent="Nie została wysłana!";
        cause.textContent="Uzupełnij pola.";
    }
    else {
        isSend.textContent = "Została wysłana!";
        console.log(showEmail.textContent.length);
        cause.textContent="";
    }
}

function hideClass() {
    for (let el of document.querySelectorAll('.MyClass')) el.classList.add('d-none'), el.classList.remove('MyClass');
    showEmail.textContent="";
    showTopic.textContent="";
    showMessage.textContent="";
    cause.textContent="";
}