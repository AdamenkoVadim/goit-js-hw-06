const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', (event) => {
   event.preventDefault();
   const {elements:{email,password}} = event.currentTarget;

   if(email.value ==='' || password.value === '') {
    alert('All fields must be filled')
   } else {
    console.log({'email':email.value, 'password': password.value});
    event.currentTarget.reset();
   }

})


