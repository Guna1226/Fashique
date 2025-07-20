document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submission for testing
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const confirmPass = document.getElementById('confirmpassword').value;

  if (pass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  // Simulate saving data
  localStorage.setItem('signupEmail', email);
  localStorage.setItem('signupPassword', pass);
  alert('Signup successful!');
  window.location.href = "index.html";
});





