

var thanks = document.getElementById('thanksC');

var err = document.getElementById('errC');


function contactSend() {
    var nameM = document.getElementById("name-modalC").value;
    var phoneM = document.getElementById("phone-modalC").value;
    var mailM = document.getElementById("email-modalC").value;
    var messM = document.getElementById("message-modalC").value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nameM) {
      if (phoneM) {
        if (phoneM.length == 10) {
          if (mailM.match(mailformat)) {
  
              firebase.database().ref("ContactUs").push({
                Name: nameM,
                Phone: phoneM,
                Mail: mailM,
                Message: messM
              }).then(() => {
                document.getElementById("name-modalC").value = "";
                document.getElementById("phone-modalC").value = "";
                document.getElementById("email-modalC").value = "";
                document.getElementById("message-modalC").value = "";
              }).then(() => {
                showThanks();
              })
  
  
          } else { showError("Enter a valid Email") }
        } else { showError("Enter a valid Phone Number") }
      } else { showError("Enter your Phone Number") }
    } else { showError("Enter your Name"); }
  
}

    function showThanks() {
        thanks.innerHTML = "We will get back to you";
        thanks.style.display = "block";
        setTimeout(function () {
          thanks.style.display = "none";
        }, 5000);
      }
      
      function showError(msg) {
        err.innerHTML = msg;
        err.style.display = "block";
        setTimeout(function () {
          err.style.display = "none";
        }, 1000);
      }
      


  
    