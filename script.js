(function () {
  var header = document.getElementById('siteHeader');
  var exclaim = document.getElementById('exclaimMark');

  function onScroll() {
    if (header) header.classList.toggle('solid', window.scrollY > 40);
    if (exclaim) {
      var scrolled = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(1, scrolled / max) : 0;
      var size = 3 + pct * 14; // grows from 3rem to 17rem
      exclaim.style.fontSize = size + 'rem';
      exclaim.style.opacity = 0.35 + pct * 0.5;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    });
  }
  if (navClose && mobileNav) {
    navClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded', 'false');
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'This is a preview site — the form isn\'t wired up yet. Call (940) 465-3697 directly for now.';
    });
  }
})();
