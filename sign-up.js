for(var i = 0; i < document.querySelectorAll(".show-password-icon").length; i++){
    
    document.querySelectorAll(".show-password-icon")[i].addEventListener("click", function(event){
      
        if(event.target.id === "firstPass") {
            var password = document.querySelector(".first");
        } else { var password = document.querySelector(".second");}
    
        
        if (password.type === "password") {
           password.type = "text";
           this.style.backgroundImage = 'url("images/eye_slash_icon.png")';
        } else {
          password.type = "password";
          this.style.backgroundImage = 'url("images/eye.png")';
        }
})
}