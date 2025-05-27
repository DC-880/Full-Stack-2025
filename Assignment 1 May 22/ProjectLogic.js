function reveal() {
  var x = document.getElementById("showpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 