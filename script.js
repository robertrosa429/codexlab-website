(function () {
  'use strict';

  // Respect user preference for reduced motion
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) return;

  // Select all elements that should animate on scroll
  var targets = document.querySelectorAll('.fade-in');

  if (!targets.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  targets.forEach(function (target) {
    observer.observe(target);
  });
})();
