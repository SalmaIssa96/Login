var signupName = document.querySelector('#signupName');
var signupEmail = document.querySelector('#signupEmail');
var signupPassword = document.querySelector('#signupPassword');
var sginupBtn = document.querySelector('#sginupBtn');
var warningText = document.querySelector('#warningText');
var warningInputEmail = document.querySelector('.warningInputEmail');

sginupBtn?.addEventListener('click', sginup);
function sginup() {
  const signupNameValue = signupName.value;
  const signupEmailValue = signupEmail.value;
  const signupPasswordValue = signupPassword.value;
  if (
    !signupNameValue.trim() ||
    !signupEmailValue.trim() ||
    !signupPasswordValue.trim()
  ) {
    warning(warningText, 'All inputs is required', 'text-danger');
    return;
  }

  var user = {
    name: signupNameValue,
    email: signupEmailValue,
    password: signupPasswordValue,
  };
  if (users.length) {
    users.map((ele) => {
      if (ele.email == user.email) {
        warning(warningText, 'Email is already USED', 'text-danger');
      } else {
        users.push(user);
        warning(
          warningText,
          'Sgin Up Success , you can LOGIN now',
          'text-success'
        );
        localStorage.setItem('users', JSON.stringify(users));
      }
    });
  } else {
    users.push(user);
    warning(warningText, 'Sgin Up Success , you can LOGIN now', 'text-success');
    localStorage.setItem('users', JSON.stringify(users));
  }
}

signupEmail.addEventListener('blur', (e) => {
  validatemail(e.target.value, signupEmail, warningInputEmail);
});
