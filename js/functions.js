var users = [];
var currentUser = [];

function warning(ele, message, className) {
  ele.removeAttribute('class');
  ele.innerHTML = message;
  ele.className = className;
}

function validatemail(email, inputElement, warningElement) {
  var regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(email)) {
    inputElement.classList.replace('is-invalid', 'is-valid');
    warningElement.innerHTML = '';
  } else {
    warning(warningElement, 'Email is not valid', 'text-danger text-start');
    inputElement.classList.add('is-invalid');
  }
}

if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
}
