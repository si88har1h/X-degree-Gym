const contactForm = document.querySelector('#contact-form');
let name = document.getElementById('name-f');
let email = document.getElementById('email-f');
let phone = document.getElementById('phone-f');
let msg = document.getElementById('msg-f');
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: msg.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Form filled Successfully');
            name.value='';
            email.value='';
            phone.value='';
            msg.value='';
        }
        else{
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));
})