/* ============================================================
   CV PREMIUM — Landing Interactions
   Scroll reveal · sticky nav · smooth scroll · print trigger
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. SCROLL REVEAL — IntersectionObserver
  ---------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.section, .hero-content, .landing-footer');

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.style.opacity = '1';
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 600ms cubic-bezier(0.4,0,0.2,1)';
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     2. SMOOTH SCROLL — nav links
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#' || href === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----------------------------------------------------------
     3. NAV — active link highlight on scroll
  ---------------------------------------------------------- */
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('.section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.style.color = '';
          });
          var activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
          if (activeLink) {
            activeLink.style.color = 'var(--text)';
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(function (s) {
      navObserver.observe(s);
    });
  }

  /* ----------------------------------------------------------
     4. KEYBOARD NAV — focus styles
  ---------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      document.body.classList.add('kb-nav');
    }
  });

  document.addEventListener('mousedown', function () {
    document.body.classList.remove('kb-nav');
  });

  /* ----------------------------------------------------------
     5. PRINT — Ctrl/Cmd+P cleanup
  ---------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      document.body.classList.add('printing');
      setTimeout(function () {
        document.body.classList.remove('printing');
      }, 1000);
    }
  });
})();
