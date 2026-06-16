'use strict';

function navbarToggle(subId) {
  const el = document.getElementById(subId);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidebar-nav .nav-link[data-sub]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navbarToggle(link.dataset.sub);
    });
  });
});
