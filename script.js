 let submitButton = document.querySelector('#submit-Button');
  function emailvalidation(email){
  	return email.includes('@');
  }
function clickListener(event){
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
    let messageText = messageInput.value;

   if(emailValidate(emailText) !==true) {
   	 console.log('The email address must contain @');
     return false;
   }
   console.log('Thanks for your message');
}
submit.addEventListener('click',clickListener);
