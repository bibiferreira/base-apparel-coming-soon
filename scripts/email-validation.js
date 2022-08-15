function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)) {
    document.getElementById("error-message").style.visibility="hidden";
    document.form1.classList.remove("error");
    document.form1.email.focus();
    return true;
  } else {
    document.getElementById("error-message").style.visibility="inherit";
    document.form1.classList.add("error");
    document.form1.email.focus();
    return false;
  }
}
