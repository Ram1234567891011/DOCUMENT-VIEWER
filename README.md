# 📘 DocumentViewer - Web-Based Document Viewer with Login System

ProDocumentViewer is a professional, modern web application built using **HTML, CSS, and JavaScript**, designed to let users **securely log in, upload, and view documents** directly in the browser — without needing a server or external database.

---

## 🚀 Features

### 🔐 Login & Registration
- Secure login and registration system (no server or PHP required).
- Passwords are safely encoded (Base64) and stored locally in the browser.
- Prevents duplicate usernames and invalid logins.

### 📁 Document Upload & Viewer
- Upload and view **PDF** and **TXT** files.
- Display PDF files using an embedded `<iframe>` viewer.
- Display TXT files with styled formatting.
- Drag & drop or file selector supported.

### 🌙 UI & UX Design
- Responsive design (mobile, tablet, desktop).
- Stylish hover effects, focus states, and user feedback.

### ⚙️ Technology Stack
- **HTML5** – Semantic layout
- **CSS3** – Dark theme, responsive design
- **JavaScript** – Frontend logic, IndexedDB handling
- **IndexedDB** – Built-in browser database for user storage (no backend needed)

---

## 📦 Folder Structure

ProDocumentViewer/
├── index.html ← Main app structure
├── style.css ← UI styling
├── app.js ← All logic for login, file reading, and view
├── manifest.json ← PWA support (optional)
├── icons/ ← App icons (192x192, 512x512)



---

## 🧪 How to Use

1. Open `index.html` in your browser.
2. Register a new account.
3. Log in with your username and password.
4. Upload a `.pdf` or `.txt` file to view it instantly.

> 📌 Works 100% offline and stores user data in the browser.

---

## ✅ Requirements

- A modern browser (Chrome, Edge, Firefox, etc.)
- No internet or server is required
- No backend, PHP, or admin panel needed

---

## 🔒 Security Notes

- For production, consider using encryption and user authentication standards.

---

## 💡 Future Improvements

- Add support for:
  - `.docx`, `.pptx`, `.xlsx` via [Office.js](https://learn.microsoft.com/en-us/javascript/api/overview/excel)
  - Syntax-highlighted code files (e.g., `.js`, `.py`)
- Add export/import options for user data
- Add multi-language support
- Convert into **PWA or Android APK**

---

## 👨‍💻 Arthur: Ram

Made with 💙 using HTML, CSS, and JavaScript.  
Contact me if you want upgraded with more features.

