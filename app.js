// DOM References
const authSection = document.getElementById("authSection");
const appSection = document.getElementById("appSection");
const loginBtn = document.getElementById("loginBtn");
const registerLink = document.getElementById("registerLink");
const fileViewer = document.getElementById("fileViewer");
const textPreview = document.getElementById("textPreview");
const langSelect = document.getElementById("langSelect");

let isRegister = false;

// Language Setup
langSelect.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Show Register View
function showRegister() {
  isRegister = !isRegister;
  document.getElementById("authTitle").textContent = isRegister ? "Register" : "Login";
  loginBtn.textContent = isRegister ? "Register" : "Login";
  registerLink.textContent = isRegister ? "Back to Login" : "Register";
}

// Local Storage Auth
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (!user || !pass) return alert("Please fill in all fields");

  let users = JSON.parse(localStorage.getItem("users") || "{}");

  if (isRegister) {
    if (users[user]) return alert("Username already exists!");
    users[user] = pass;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered! Please login.");
    showRegister();
  } else {
    if (users[user] && users[user] === pass) {
      localStorage.setItem("loggedInUser", user);
      showApp();
    } else {
      alert("Invalid credentials!");
    }
  }
}

// Show Main App
function showApp() {
  authSection.classList.add("hidden");
  appSection.classList.remove("hidden");
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  authSection.classList.remove("hidden");
  appSection.classList.add("hidden");
}

// Check Session
window.onload = () => {
  if (localStorage.getItem("loggedInUser")) {
    showApp();
  }
};

// File Trigger
function triggerFile() {
  document.getElementById("fileInput").click();
}

// Handle File Input
function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  const ext = file.name.split('.').pop().toLowerCase();

  if (ext === "pdf") {
    fileViewer.src = URL.createObjectURL(file);
    fileViewer.classList.remove("hidden");
    textPreview.classList.add("hidden");
  } else if (["txt"].includes(ext)) {
    reader.onload = () => {
      fileViewer.classList.add("hidden");
      textPreview.classList.remove("hidden");
      textPreview.textContent = reader.result;
    };
    reader.readAsText(file);
  } else {
    alert("Preview not supported for ." + ext + " yet.");
  }
}

// Drag & Drop Support
function dragOverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  e.preventDefault();
  const dt = e.dataTransfer;
  if (dt.files.length > 0) {
    document.getElementById("fileInput").files = dt.files;
    handleFile({ target: { files: dt.files } });
  }
}
