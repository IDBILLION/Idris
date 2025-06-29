 function validatePassword() {
     const password = document.getElementById("password").value;
     const error = document.getElementById("error");
     const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;

     if (!alphanumericRegex.test(password)) {
         error.textContent = "password must be at least 8 characters longand contain both letters and numbers.";
         return false;
     }
     error.textContent = "";
     alert("Password is Valid!");
     return true;
 }

 function myFunction(a, b, c) {
     return arguments.length;
 }
 document.getElementById("demo").innerHTML = myFunction.toString;

 const x =
     document.getElementById("1");

 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
     } else {
         x.innerHTML = "Geolocation is not supported by this browser.";
     }
 }

 function showPosition(position) {
     x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude" + position.coords.longitude;
 }

 function showError(error) {
     switch (error.code) {
         case error.PERMISSION_DENIED:
             x.innerHTML = "User denied the request for Geolocation."
             break;
         case error.TIMEOUT:
             x.innerHTML = "The request to get user location timed out."
             break;
         case error.UNKNOWN_ERROR:
             x.innerHTML = "An unknown error occured."
             break;
     }
 }

 /* watch Position */
 const x = document.getElementById();

 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.watchPosition(showPosition);
     } else {
         x.innerHTML = "Geolocation is not supported by this browser.";
     }
 }

 function showPosition(position) {
     x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
 }
 setTimeout(myFunction, 3000);

 function myFunction() {
     document.getElementById("1").innerHTML = "Whatsoever you want to display";
 }
 setInterval(myFunction, 1000);

 function myFunction() {
     let d = new Date();
     document.getElementById("demo").innerHTML =
         d.getHours() + ":" +
         d.getMinutes() + ":" +
         d.getSeconds();
 }