
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('header','logo', 'nav-links', 'nav-button');
    if (window.scrollY > 200) {
      header.classList.add('scrolled');
      logo.classList.add('scrolled');
      navLinks.classList.add('scrolled');
      navButton.classList.add('scrolled');

    } else {
      header.classList.remove('scrolled');
      logo.classList.remove('scrolled');
      navLinks.classList.remove('scrolled');
      navButton.classList.remove('scrolled');
    }
  });
