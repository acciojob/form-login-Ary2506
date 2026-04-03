function getFormvalue() {
  event.preventDefault();

  let fname = document.querySelector('input[name="fname"]').value.trim();
  let lname = document.querySelector('input[name="lname"]').value.trim();

  let fullName = (fname + " " + lname).trim();

  alert(fullName);
}

