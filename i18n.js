// Language support script
const translations = {
  en: {
    login: "Login",
    register: "Register",
    username: "Username",
    password: "Password",
    dragDrop: "Drag & Drop or Click to Upload",
    logout: "Logout",
    backToLogin: "Back to Login",
  },
  fil: {
    login: "Mag-login",
    register: "Magrehistro",
    username: "Pangalan",
    password: "Password",
    dragDrop: "I-drag at I-drop o I-click upang Mag-upload",
    logout: "Mag-logout",
    backToLogin: "Bumalik sa Login",
  },
  es: {
    login: "Iniciar sesión",
    register: "Registrarse",
    username: "Nombre de usuario",
    password: "Contraseña",
    dragDrop: "Arrastrar y soltar o hacer clic para subir",
    logout: "Cerrar sesión",
    backToLogin: "Volver al inicio",
  },
};

function setLanguage(lang) {
  document.getElementById("authTitle").textContent =
    isRegister ? translations[lang].register : translations[lang].login;
  document.getElementById("loginBtn").textContent =
    isRegister ? translations[lang].register : translations[lang].login;
  document.getElementById("username").placeholder =
    translations[lang].username;
  document.getElementById("password").placeholder =
    translations[lang].password;
  document.getElementById("uploadText").textContent =
    translations[lang].dragDrop;
  document.getElementById("logoutBtn").textContent =
    translations[lang].logout;
  document.getElementById("registerLink").textContent =
    isRegister ? translations[lang].backToLogin : translations[lang].register;
}
