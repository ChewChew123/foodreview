document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  let storedPassword = getCookie(username + "_password");

  if (!storedPassword) {
    alert("No account found with this username!");
    return;
  }

  if (storedPassword === password) {
    alert("Login successful! Welcome, " + username);
    window.location.href = "index.html";
  } else {
    alert("Wrong password!");
  }
});

// ===== Cookie Helper =====
function getCookie(name) {
  let ca = document.cookie.split(";");
  name = name + "=";
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) return c.substring(name.length);
  }
  return "";
}
