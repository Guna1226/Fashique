const form = document.getElementById("auth-form");
    const formTitle = document.getElementById("form-title");
    const submitText = document.getElementById("submit-text");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    const confirmPasswordContainer = document.getElementById("confirm-password-container");

    let isLogin = false;

    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      isLogin = !isLogin;

      if (isLogin) {
        formTitle.textContent = "Login";
        submitText.textContent = "Login";
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = "Sign Up";
        confirmPasswordContainer.classList.add("hidden");
      } else {
        formTitle.textContent = "Sign Up";
        submitText.textContent = "Sign Up";
        toggleText.textContent = "Already have an account?";
        toggleLink.textContent = "Login";
        confirmPasswordContainer.classList.remove("hidden");
      }

      clearErrors();
    });

    function clearErrors() {
      [usernameError, emailError, passwordError, confirmPasswordError].forEach(err => {
        err.classList.add("hidden");
      });
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrors();

      const username = usernameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      let valid = true;

      if (username.length < 3) {
        usernameError.classList.remove("hidden");
        valid = false;
      }

      if (!validateEmail(email)) {
        emailError.classList.remove("hidden");
        valid = false;
      }

      if (password.length < 6) {
        passwordError.classList.remove("hidden");
        valid = false;
      }

      if (!isLogin && password !== confirmPassword) {
        confirmPasswordError.classList.remove("hidden");
        valid = false;
      }

      if (valid) {
  if (isLogin) {
    alert("Login successful!");
    window.location.href = "home.html"; // ✅ Redirect after login
  } else {
    alert("Signup successful!");
    form.reset();
    toggleLink.click(); // Switch to login form after signup
  }
}

    });





