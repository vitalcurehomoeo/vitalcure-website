# VitalCure Homoeopathy Clinic – Website

## 📁 Project Structure

```
vitalcure/
├── index.html          ← Main HTML page (all sections & content)
├── css/
│   └── style.css       ← All styles (colors, layout, fonts)
├── js/
│   └── main.js         ← JavaScript (FAQ toggle, nav highlight)
├── images/             ← Put your photos here
│   └── (empty)         ← e.g. doctor.jpg, hero-photo.jpg
└── README.md           ← This file
```

---

## 🛠 How to Open in VS Code

1. Unzip the downloaded folder
2. Open VS Code
3. Go to **File → Open Folder** → select the `vitalcure` folder
4. Install the **Live Server** extension (if not already installed)
5. Right-click `index.html` → **Open with Live Server**

---

## ✏️ Common Edits

### Change Phone Number / Email / Address
- Search for `+918421607933` → replace with your number (update all 3 places: topbar, hero buttons, footer)
- Search for `aswineeyarnal@gmail.com` → replace with your email
- Search for `Shop 66` → replace with your address

### Change Brand Colors
Open `css/style.css` and edit the `:root` block at the top:
```css
:root {
  --green-dark:  #1a4d2e;   /* Main dark color */
  --green-mid:   #2d6a4f;   /* Medium accent   */
  --green-light: #52b788;   /* Light accent    */
  ...
}
```

### Add a Real Doctor Photo
In `index.html`, find the `<!-- TO ADD A REAL PHOTO -->` comment and replace the emoji div with:
```html
<img src="images/doctor.jpg" alt="Dr. Ashwini Kore" style="width:100%; height:300px; object-fit:cover;">
```
Put `doctor.jpg` in the `images/` folder.

### Add a New Treatment Card
In `index.html`, inside the `<div class="treatments-grid">`, copy this block:
```html
<div class="treat-card">
  <span class="treat-icon">EMOJI</span>
  <div class="treat-name">Condition Name</div>
  <div class="treat-desc">Short description of the treatment.</div>
</div>
```

### Add a New FAQ
In `index.html`, inside `<div class="faq-container">`, copy this block:
```html
<div class="faq-item">
  <div class="faq-q" onclick="toggleFaq(this)">Your Question Here? <span class="arrow">▾</span></div>
  <div class="faq-a">Your answer here.</div>
</div>
```

### Add a New Testimonial
In `index.html`, inside `<div class="testimonials-grid">`, copy this block:
```html
<div class="testi-card">
  <div class="stars">★★★★★</div>
  <p class="testi-text">"Patient review text here."</p>
  <div class="testi-author">
    <div class="testi-avatar">A</div>   <!-- First letter of name -->
    <div class="testi-author-info">
      <strong>Patient Full Name</strong>
      <span>Condition – City</span>
    </div>
  </div>
</div>
```

### Update Social Media Links
In `index.html`, find the `<!-- Edit href for real social media pages -->` comment and update:
```html
<a href="https://facebook.com/YOUR_PAGE" title="Facebook">f</a>
<a href="https://instagram.com/YOUR_HANDLE" title="Instagram">ig</a>
```

---

## 🚀 Deploying the Website

To put this website online, you can use any of these free options:
- **Netlify** – drag & drop the `vitalcure` folder at netlify.com
- **GitHub Pages** – push to GitHub, enable Pages in settings
- **Hostinger / GoDaddy** – upload files via File Manager in cPanel

---

## 📦 Files Changed When Updating Content

| What you want to change        | File to edit        |
|-------------------------------|---------------------|
| Text, sections, content       | `index.html`        |
| Colors, fonts, spacing, layout| `css/style.css`     |
| FAQ behavior, nav scroll      | `js/main.js`        |
| Photos / images               | `images/` folder    |
