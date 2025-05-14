function showRegister(){
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("registerpage").style.display = "block";
    document.getElementById("forgotpage").style.display = "none";
}
function showLogin(){
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("loginpage").style.display = "block";
    document.getElementById("forgotpage").style.display = "none";
  }
  function showForgot() {
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("forgotpage").style.display = "block";
  }
  function registerUser(){
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;
  
    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }
  
    if (localStorage.getItem(username)) {
      alert("User already exists!");
      return;
    }
    localStorage.setItem(username, password);
    alert("Registration successful! Please log in.");
    showLogin();
  }
  function loginUser() {
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passInput").value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Login successful!");
      showDashboard(username);
    } else {
      alert("Incorrect username or password.");
    }
  }
function resetPassword() {
    const username = document.getElementById("Forgotuser").value;
    const newPassword = document.getElementById("newInput").value;
  
    if (!username || !newPassword) {
      alert("Please fill in both fields.");
      return;
    }
  
    if (localStorage.getItem(username)) {
      localStorage.setItem(username, newPassword);
      alert("Password reset successful!");
      showLogin();
    } else {
      alert("Username not found.");
    }
  }
  function showDashboard(username) {
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("forgotpage").style.display = "none";
    document.getElementById("dashboardpage").style.display = "block";
  
    document.getElementById("message").innerText = `Welcome, ${username}!`;
  }
  
  function logout() {
    document.getElementById("dashboardpage").style.display = "none";
    showLogin();
  }   