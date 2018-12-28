// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var thanks = document.getElementById('thanks');

var err = document.getElementById('err');





function modalsend() {
  var nameM = document.getElementById("name-modal").value;
  var phoneM = document.getElementById("phone-modal").value;
  var mailM = document.getElementById("email-modal").value;
  var dateM = document.getElementById("date-modal").value;
  var messM = document.getElementById("message-modal").value;


  // if(nameM){
  //   firebase.database().ref("Testing").push("Heelo");
  // }else{
  //   showThanks();
  // }
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nameM) {
    if (phoneM) {
      if (phoneM.length == 10) {
        if (mailM.match(mailformat)) {
          if (dateM) {

            firebase.database().ref("Appointment").push({
              Name: nameM,
              Phone: phoneM,
              Mail: mailM,
              Date: dateM,
              Message: messM
            }).then(() => {
              document.getElementById("name-modal").value = "";
              document.getElementById("phone-modal").value = "";
              document.getElementById("email-modal").value = "";
              document.getElementById("date-modal").value = "";
              document.getElementById("message-modal").value = "";
            }).then(() => {
              showThanks();
            })


          } else { showError("Select a Date") }
        } else { showError("Enter a valid Email") }
      } else { showError("Enter a valid Phone Number") }
    } else { showError("Enter your Phone Number") }
  } else { showError("Enter your Name"); }


}

function sendData() {
}


function showThanks() {
  thanks.innerHTML = "Your appointment is Set";
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







// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    // modal.style.display = "none";
  }
}
