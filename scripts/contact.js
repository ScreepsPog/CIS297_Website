const form = document.getElementById('contact-form');
const container = document.getElementById('form-container');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nameInput = form.elements['name'].value.trim();

  container.innerHTML = `<div class="thank-you-message">Thank you, ${escapeHtml(nameInput)}! We’ve received your message.</div>`;
});

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function(match) {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[match];
  });
}
