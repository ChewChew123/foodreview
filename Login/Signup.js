document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let secret = document.getElementById("secret").value.trim();

  if (getCookie(username)) {
    alert("Username already exists!");
    return;
  }

  setCookie(username + "_password", password, 7);
  setCookie(username + "_secret", secret, 7);

  alert("Account created successfully!");
  window.location.href = "login.html";
});

// ===== Cookie Helpers =====
function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  let ca = document.cookie.split(";");
  name = name + "=";
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) return c.substring(name.length);
  }
  return "";
}
