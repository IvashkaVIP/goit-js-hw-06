const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (!email || !password) {
    alert("Все поля должны быть заполнены!");
    return;
  }
  
  console.log({ email, password });
  alert("Данные отправлены");
  form.reset();
}

// console.log(form);
