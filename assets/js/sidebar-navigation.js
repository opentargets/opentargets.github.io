document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.ot-sidebar-nav');
  const sidebarLinks = document.querySelectorAll('.ot-sidebar-link');
  const sections = document.querySelectorAll('section[id]');
  const hero = document.querySelector('.ot-hero');

  // Show/hide sidebar based on scroll position
  function toggleSidebarVisibility() {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    const windowHeight = window.innerHeight;

    // Show sidebar when hero is mostly out of view
    if (heroBottom < windowHeight * 0.3) {
      sidebar.classList.add('visible');
    } else {
      sidebar.classList.remove('visible');
    }
  }

  // Update active link based on scroll position
  function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      // Check if section is in the middle of viewport
      if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
        currentSection = section.getAttribute('id');
      }
    });

    // Fallback: use the first section that's visible
    if (!currentSection) {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.75 && sectionTop > 0) {
          currentSection = section.getAttribute('id');
        }
      });
    }

    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Smooth scroll to section when link is clicked
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerOffset = 80; // Adjust for any fixed header
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initial check
  toggleSidebarVisibility();
  updateActiveLink();

  // Listen for scroll events
  window.addEventListener('scroll', function () {
    toggleSidebarVisibility();
    updateActiveLink();
  });

  // Listen for resize events
  window.addEventListener('resize', function () {
    toggleSidebarVisibility();
    updateActiveLink();
  });
});