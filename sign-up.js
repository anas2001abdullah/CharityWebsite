for(var i = 0; i < document.querySelectorAll(".show-password-icon").length; i++){
    
    document.querySelectorAll(".show-password-icon")[i].addEventListener("click", function(event){
      
        if(event.target.id === "firstPass") {
            var password = document.querySelector(".first");
        } else { var password = document.querySelector(".second");}
    
        
        if (password.type === "password") {
           password.type = "text";
           password.style.paddingLeft = "45px";
           password.style.textAlign = "left";
           this.classList.remove("fa-eye");
           this.classList.add("fa-eye-slash");
           
        } else {
          password.type = "password";
          
          this.classList.remove("fa-eye-slash");
          this.classList.add("fa-eye");
        }
})
}