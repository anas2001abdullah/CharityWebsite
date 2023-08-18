$("#MedicineDonationButton").click(function () {
    $(".shadow").fadeIn(25);
    $("#MedicineDonationService").fadeIn(400);
  });
  
  $("#DonationcloseForm").click(function () {
    $(".shadow").fadeOut(400);
    $("#MedicineDonationService").fadeOut(50);
    $("#MedicineDonationHintMessage").fadeIn();
    $(".MedicineDonationForm").fadeOut();
    
  });
  $("#MedicineDonationContinue").on("click", function(){
    $("#MedicineDonationHintMessage").hide();
    $(".MedicineDonationForm").fadeIn();
});
$("#VolunteeringButton").click(function () {
  $(".shadow").fadeIn(25);
  $("#VolunteeringService").fadeIn(400);
});

$("#VolunteeringcloseForm").click(function () {
  $(".shadow").fadeOut(400);
  $("#VolunteeringService").fadeOut(50);
  $("#VolunteeringHintMessage").fadeIn();
  $(".volunteeringForm").fadeOut();
  
});
$("#VolunteeringContinue").on("click", function(){
  $("#VolunteeringHintMessage").hide();
  $(".volunteeringForm").fadeIn();
});
$("#TrainingButton").click(function () {
  $(".shadow").fadeIn(25);
  $("#TrainingService").fadeIn(400);
});

$("#TrainingcloseForm").click(function () {
  $(".shadow").fadeOut(400);
  $("#TrainingService").fadeOut(50);
  $("#TrainingHintMessage").fadeIn();
  
});

$("#type").on("change", function () {
  if($(this).val() === "AddNewOption"){
    $("#newOption").show();
  } else {
    $("#newOption").hide();
  }
});