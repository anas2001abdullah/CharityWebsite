document.querySelector(".show-password-icon").addEventListener("click", function(event){
      
    var password = document.querySelector(".password");
    
    if (password.type === "password") {
       password.type = "text";
       password.style.paddingLeft = "10%";
       password.style.textAlign = "left";
       this.classList.remove("fa-eye");
       this.classList.add("fa-eye-slash");
       
    } else {
      password.type = "password";
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }
})