// The main interaction logic lives in script.js. Load it here because this
// legacy entry point is still referenced by index.html.
const interactionScript = document.createElement('script');
interactionScript.src = './script.js';
interactionScript.async = false;
document.head.appendChild(interactionScript);

// Kept for compatibility with older markup that used a hidden booking panel.
const bookingButton = document.querySelector('#show-booking');
const bookingFrame = document.querySelector('#booking-frame');

if (bookingButton && bookingFrame) {
  bookingButton.addEventListener('click', () => {
    const iframe = bookingFrame.querySelector('iframe');
    if (iframe && !iframe.getAttribute('src')) iframe.src = iframe.dataset.src;
    bookingFrame.hidden = false;
    bookingButton.hidden = true;
    bookingFrame.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
