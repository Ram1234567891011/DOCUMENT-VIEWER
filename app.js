let db;

// Initialize IndexedDB
const request = indexedDB.open("DocViewerDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  let store = db.createObjectStore("users", { keyPath: "username" });
  store.createIndex("password", "password", { unique: false });
};

request.onsuccess = function (event) {
  db = event.target.result;
};

request.onerror = function (event) {
  console.error("DB Error:", event.target.errorCode);
};

// Handle Register
document.getElementById("registerBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) return alert("Please enter credentials");

  const tx = db.transaction("users", "readwrite");
  const store = tx.objectStore("users");
  const data = { username: user, password: btoa(pass) };

  const addReq = store.add(data);

  addReq.onsuccess = () => {
    alert("✅ Registered successfully!");
    document.getElementById("loginForm").reset();
  };

  addReq.onerror = () => {
    alert("❌ Username already exists!");
  };
});

// Handle Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const tx = db.transaction("users", "readonly");
  const store = tx.objectStore("users");
  const getReq = store.get(user);

  getReq.onsuccess = () => {
    if (!getReq.result) {
      alert("❌ User not found!");
    } else if (getReq.result.password === btoa(pass)) {
      alert("✅ Login successful!");
      document.getElementById("loginScreen").style.display = "none";
      document.getElementById("viewerScreen").style.display = "block";
    } else {
      alert("❌ Incorrect password!");
    }
  };
});

// File Upload + Display PDF/Text
document.getElementById("fileInput").addEventListener("change", handleFile);
document.getElementById("dropZone").addEventListener("dragover", (e) => e.preventDefault());
document.getElementById("dropZone").addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer.files.length) handleFile({ target: { files: e.dataTransfer.files } });
});

function handleFile(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  if (file.type === "application/pdf") {
    const url = URL.createObjectURL(file);
    document.getElementById("pdfViewer").src = url;
    document.getElementById("fileName").innerText = file.name;
  } else {
    reader.onload = function () {
      document.getElementById("textContent").innerText = reader.result;
      document.getElementById("pdfViewer").src = "";
      document.getElementById("fileName").innerText = file.name;
    };
    reader.readAsText(file);
  }
}
