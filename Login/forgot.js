document.getElementById("forgotForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let secret = document.getElementById("secret").value.trim();

  let storedSecret = getCookie(username + "_secret");
  let storedPassword = getCookie(username + "_password");

  if (!storedSecret) {
    alert("No account found with this username!");
    return;
  }

  if (storedSecret === secret) {
    alert("Your password is: " + storedPassword);
  } else {
    alert("Secret word is incorrect!");
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
