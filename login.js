let form = document.getElementById("form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
// console.log(emailInput.value)
let user = JSON.parse(localStorage.getItem("user"));

console.log(user)
form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  let username = emailInput.value;
  let password = passwordInput.value;
  console.log(username)
  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("User not found. Please register first.");
    return;
  }

  if (username === user.email && password === user.password) {
    // Redirect to the post page with the same user details
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "posts.html";
  } else {
   alert("Invalid username or password.");
  }
}

// Add event listener to the clear button
document.getElementById('clear-button').addEventListener('click', function() {
  // Clear local storage
  localStorage.clear();

  // Optionally, you can perform additional actions after clearing local storage
  alert('Local storage cleared successfully.');
});

