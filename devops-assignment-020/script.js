const container = document.querySelector('.seats');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('bookBtn');

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

bookBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat before booking!');
  } else {
    alert(`🎟️ Successfully booked ${selectedSeats.length} seat(s) for ₹${selectedSeats.length * ticketPrice}!`);
    selectedSeats.forEach(seat => seat.classList.remove('selected'));
    updateSelectedCount();
  }
});
