window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax-image');
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
});
