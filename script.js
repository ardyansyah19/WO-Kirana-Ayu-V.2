// header scroll state
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// booking form -> WhatsApp
const WA_NUMBER = '6281234567890'; // TODO: ganti dengan nomor WhatsApp bisnis Anda
const form = document.getElementById('bookingForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const wa = document.getElementById('wa').value;
  const tanggal = document.getElementById('tanggal').value;
  const paket = document.getElementById('paket').value;
  const pesan = document.getElementById('pesan').value;
  const text = `Halo Kirana Ayu Bridal, saya ingin booking:%0A` +
               `Nama: ${nama}%0A` +
               `No. WA: ${wa}%0A` +
               `Tanggal Acara: ${tanggal}%0A` +
               `Paket: ${paket}%0A` +
               `Catatan: ${pesan}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
});
