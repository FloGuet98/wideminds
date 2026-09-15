const bookingButton = document.querySelector('#show-booking');
const bookingFrame = document.querySelector('#booking-frame');
if (bookingButton && bookingFrame) {
  bookingButton.addEventListener('click', () => {
    const iframe = bookingFrame.querySelector('iframe');
    if (!iframe.getAttribute('src')) iframe.src = iframe.dataset.src;
    bookingFrame.hidden = false;
    bookingButton.hidden = true;
    bookingFrame.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
