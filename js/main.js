/* =========================================================
   VitalCure Homoeopathy Clinic – JavaScript
   File: js/main.js
   =========================================================
   Contains:
   1. FAQ accordion toggle
   2. Active nav link on scroll highlight
   3. WhatsApp appointment booking
   ========================================================= */

/* ── 1. FAQ ACCORDION ──────────────────────────────────────
   Click a question to open/close its answer.
   Only one answer can be open at a time.
   --------------------------------------------------------- */
function toggleFaq(el) {
  const answer  = el.nextElementSibling;
  const isOpen  = answer.classList.contains('open');

  // Close all open answers first
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));

  // If it wasn't open, open it
  if (!isOpen) {
    answer.classList.add('open');
    el.classList.add('open');
  }
}

/* ── 2. ACTIVE NAV LINK ON SCROLL ─────────────────────────
   Highlights the correct nav link as the user scrolls
   through the page sections.
   --------------------------------------------------------- */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks  = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ── 3. WHATSAPP APPOINTMENT BOOKING ───────────────────────
   Collects form data and opens WhatsApp with a pre-filled
   message sent directly to the clinic's number.
   --------------------------------------------------------- */
function sendWhatsApp() {
  // Collect form values
  const firstName = document.querySelector('input[placeholder="Priya"]').value.trim();
  const lastName  = document.querySelector('input[placeholder="Sharma"]').value.trim();
  const phone     = document.querySelector('input[type="tel"]').value.trim();
  const email     = document.querySelector('input[type="email"]').value.trim();
  const condition = document.querySelector('select').value.trim();
  const message   = document.querySelector('textarea').value.trim();

  // Validate – at least name and phone must be filled
  if (!firstName || !phone) {
    alert('Please enter at least your Name and Phone Number before submitting.');
    return;
  }

  // Build the WhatsApp message
  const fullName = firstName + (lastName ? ' ' + lastName : '');
  const text =
    `Hello Dr. Ashwini Kore 🌿%0A%0A` +
    `*New Appointment Request – VitalCure*%0A` +
    `──────────────────%0A` +
    `👤 *Name:* ${fullName}%0A` +
    `📞 *Phone:* ${phone}%0A` +
    (email     ? `✉️ *Email:* ${email}%0A`         : '') +
    (condition ? `🏥 *Condition:* ${condition}%0A` : '') +
    (message   ? `📝 *Message:* ${message}%0A`     : '') +
    `──────────────────%0A` +
    `_Sent from VitalCure Website_`;

  // Open WhatsApp — change number here if it ever changes
  window.open(`https://wa.me/918421607933?text=${text}`, '_blank');
}