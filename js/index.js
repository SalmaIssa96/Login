var welcomeUser = document.querySelector('#welcomeUser');
var redirect = () => {
  if (localStorage.getItem('currentUser')) {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      window.location = `${window.location.origin}/login.html`;
    } else {
      welcomeUser.innerHTML = `Welcome ${currentUser.name}`;
    }
  } else {
    window.location = `${window.location.origin}/login.html`;
  }
};

var logout = function () {
  localStorage.removeItem('currentUser');
  redirect();
};

window.onload = () => {
  redirect();
};
