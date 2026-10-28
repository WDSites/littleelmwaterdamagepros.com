(function () {
  var BP = 900; // must match the CSS breakpoint
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  var root = document.documentElement;
  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    root.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
  }
  var drops = document.querySelectorAll('.navdrop-btn');
  for (var i = 0; i < drops.length; i++) {
    drops[i].addEventListener('click', function (e) {
      var li = e.currentTarget.parentNode;
      var isOpen = li.classList.toggle('open');
      e.currentTarget.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenu(false);
      var open = document.querySelectorAll('.navlinks > li.open');
      for (var j = 0; j < open.length; j++) open[j].classList.remove('open');
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > BP) setMenu(false);
  });
})();
