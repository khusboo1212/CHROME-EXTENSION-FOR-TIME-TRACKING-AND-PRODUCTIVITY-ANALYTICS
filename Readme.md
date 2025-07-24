 ## Time Tracker & Productivity Chrome Extension 

A Chrome Extension that **tracks how much time you spend on each website**, classifies websites as **productive or unproductive**, and shows a simple dashboard with your usage summary.


## Features

-  Tracks time spent on websites (in seconds and minutes)
-  Classifies **productive** sites like `github.com` a
-  Classifies  **unproductive** sites like `instagram.com` 
-  Stores data locally using `chrome.storage.local`


##  Project Structure

productivity-tracker/
├── extension/
│ ├── background.js # Tracks active time on sites
│ ├── content.js # (Empty, reserved for future)
│ ├── popup.html # Mini popup UI
│ ├── popup.js # Logic to show tracked data
│ ├── dashboard.html # Optional full-screen dashboard
│ ├── dashboard.js # Optional dashboard logic
│ └── manifest.json # Chrome Extension configuration


##  How to Run

### 1. Enable Developer Mode

- Open Chrome and go to: `chrome://extensions/`
- Toggle ON **Developer Mode** (top-right)

### 2. Load the Extension

- Click **"Load unpacked"**
- Select the `extension/` folder from this project

### 3. Start Using It

- Click the **extension icon** (🧩) in the toolbar
- Pin it for easy access (optional)
- Visit sites like:
  - ✅ `https://github.com` (productive)
  - ❌ `https://instagram.com` (unproductive)
- Switch tabs and browse for at least 10–15 seconds
- Click the icon again to see usage in the popup

---

## 🧪 Debugging Tips

- You can inspect your background tracker:
  - Go to `chrome://extensions/`
  - Click **"Service Worker" → Inspect**
  - Watch the console for time logs
- If the popup shows “No data tracked yet”, try switching between two tabs

---

## 📈 Future Improvements

- Weekly report with charts
- Backend (Node.js + MongoDB) to sync data online
- Productivity score visualization

---

## 🛠 Tech Stack

- JavaScript (ES6+)
- Chrome Extension API
- HTML/CSS (Vanilla)
- `chrome.storage.local` for saving data

---

## 📌 Note

This extension currently stores data **locally only**. If you close Chrome or clear storage, usage data will reset unless integrated with a backend.

---

##  Author

Made by **Himani Kotnala**   
For educational and personal productivity improvement.
