function switchVisible() {
  if (document.getElementById('a')) {

      if (document.getElementById('a').style.display == 'none') {
          document.getElementById('a').style.display = 'block';
          document.getElementById('b').style.display = 'none';
      }
      else {
          document.getElementById('a').style.display = 'none';
          document.getElementById('b').style.display = 'block';
      }
  }
}

function valideForm() {
  let estvalide = true;

  const emailInput = document.getElementById("email");

  if(emailInput.value === "") {
    document.getElementById("error_message") .innerHTML = "vaild email required";
    emailInput.nextElementSibling.style.display = "block";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.background = "hsl(3, 39%, 81%)";

    estvalide = false;
  } else {
    emailInput.nextElementSibling.style.display = "none";
    emailInput.style.border = "1px solide black";
  }

  if(estvalide) {
    return switchVisible();
  }
}