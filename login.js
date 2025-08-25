document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  // Check if user exists in localStorage
  let userData = JSON.parse(localStorage.getItem('users') || '{}');
  let storedUser = userData[username];

  // Debug: Log the stored and entered passwords
  console.log('Stored User Data:', storedUser);
  console.log('Stored Password:', storedUser?.password);
  console.log('Entered Password:', password);

  if (!storedUser) {
    alert("No account found with this username!");
    return;
  }

  if (storedUser.password === password) {
    alert("Login successful! Welcome, " + username);
    // Store the current user in localStorage for session tracking
    localStorage.setItem('currentUser', JSON.stringify({ username: username }));
    window.location.href = "index.html";
  } else {
    alert("Wrong password!");
  }
});

// Function to register a new user (can be called on a signup form or initial login)
// Note: This is optional; remove if not needed in login.js
function registerUser(username, password) {
  let userData = JSON.parse(localStorage.getItem('users') || '{}');
  userData[username] = password;
  localStorage.setItem('users', JSON.stringify(userData));
}

// Cookie helper (no longer needed but kept for reference)
function getCookie(name) {
  let ca = document.cookie.split(";");
  name = name + "=";
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) return c.substring(name.length);
  }
  return "";
}

function goBack() {
  // Check if there's a previous page in browser history
  if (window.history.length > 1 && document.referrer) {
    window.history.back();
  } else {
    // Fallback to homepage if no history exists
    window.location.href = 'favourite.html';
  }
}