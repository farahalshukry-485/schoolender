var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) { 
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
   
        window.location.href="newpage.html";
    } 
   }

function passlog() {
    if (password.value!= confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");

}
    
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;