const btn  = document.getElementById('toggleBtn');
const info = document.getElementById('info');
btn.addEventListener('click', function () {
  info.classList.toggle('hidden');
  btn.classList.toggle('active');
  if (info.classList.contains('hidden')) {
    btn.textContent = 'Show Details';
  } else {
    btn.textContent = 'Hide Details';
  }
});
