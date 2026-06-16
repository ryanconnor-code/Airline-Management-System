'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');
  if (!box) return;

  function handleRadioClick() {
    const roundtrip = document.getElementById('roundtrip');
    box.style.display = (roundtrip && roundtrip.checked) ? 'block' : 'none';
  }

  document.querySelectorAll('input[name="optradio"]').forEach(radio => {
    radio.addEventListener('change', handleRadioClick);
  });
});
