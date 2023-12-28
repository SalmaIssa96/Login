var signinEmail = document.querySelector('#signinEmail');
var signinPassword = document.querySelector('#signinPassword');
var loginButton = document.querySelector('#loginButton');
var warningInputEmail = document.querySelector('.warningInputEmail');
var warningInput = document.querySelector('.warningInput');

const redirect = () => {
  if (localStorage.getItem('currentUser')) {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      window.location = `${window.location.origin}/Login/index.html`;
    }
  }
};
loginButton?.addEventListener('click', login);

console.log(users, 'users');
function login() {
  console.log('hello');
  var userEmail = signinEmail.value;
  var userPass = signinPassword.value;
  if (!userEmail.trim() || !userPass.trim()) {
    warning(warningInput, 'All inputs is required', 'text-danger');
    return;
  }
  const user = users.find(
    (user) => user.email === userEmail && user.password === userPass
  );
  if (user) {
    console.log('true');
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    redirect();
    warning(warningInput, 'Sign in Success', 'text-success');
  } else {
    console.log('false');
    warning(
      warningInput,
      'Sign in failed , email or password  not correct',
      'text-danger'
    );
  }
}

signinEmail.addEventListener('blur', (e) => {
  validatemail(e.target.value, signinEmail, warningInputEmail);
});

redirect();
