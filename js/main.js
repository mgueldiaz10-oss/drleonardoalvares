/**
 * MOLECULAR SPECTROSCOPY LABORATORY - CLIENT JAVASCRIPT
 * Principal Investigator: Dr. Leonardo Álvarez Valtierra
 * Universidad de Guanajuato (DCI - León)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initSectionObserver();
  initPublicationSearch();
  initCitationCopy();
  initLabBranchNavigation();
  initBackToTop();
  initImageFallbackHandler();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation & Drawer Management
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const navLinks = drawer ? drawer.querySelectorAll('.mobile-nav-link') : [];

  if (!toggleBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   2. Sticky Header Elevation on Scroll
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. Active Navigation Link Highlighting (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initSectionObserver() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        desktopLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
          }
        });

        mobileLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   4. Laboratory Facilities & Areas Navigation (laboratorio.html)
   -------------------------------------------------------------------------- */
function initLabBranchNavigation() {
  const branchBtns = document.querySelectorAll('.lab-branch-nav-btn');
  const branchPanes = document.querySelectorAll('.lab-branch-pane');
  const sidebar = document.getElementById('labSidebar') || document.querySelector('.lab-branch-sidebar');

  if (!branchBtns.length || !branchPanes.length) return;

  // Handle click on sidebar buttons with sticky header offset
  branchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          history.pushState(null, '', targetId);
          updateActiveBranchBtn(targetId.substring(1));
        }
      }
    });
  });

  function updateActiveBranchBtn(activeId) {
    branchBtns.forEach(b => {
      const href = b.getAttribute('href');
      if (href === `#${activeId}`) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  // ScrollSpy for laboratory area panes
  if ('IntersectionObserver' in window) {
    const branchObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveBranchBtn(entry.target.id);
        }
      });
    }, {
      rootMargin: '-15% 0px -55% 0px',
      threshold: 0
    });

    branchPanes.forEach(pane => branchObserver.observe(pane));
  }

  // Mobile docking interaction on scroll:
  // Initial landing has the full menu in document flow.
  // Scrolling down folds the menu into a sleek interactive icon rail on the right edge.
  if (sidebar) {
    let isDocked = false;

    const handleMobileDock = () => {
      if (window.innerWidth < 992) {
        const threshold = 280;
        if (window.scrollY > threshold) {
          if (!isDocked) {
            sidebar.classList.add('docked-mobile');
            isDocked = true;
          }
        } else {
          if (isDocked) {
            sidebar.classList.remove('docked-mobile');
            isDocked = false;
          }
        }
      } else {
        if (isDocked) {
          sidebar.classList.remove('docked-mobile');
          isDocked = false;
        }
      }
    };

    window.addEventListener('scroll', handleMobileDock, { passive: true });
    window.addEventListener('resize', handleMobileDock, { passive: true });
    handleMobileDock();
  }
}

/* --------------------------------------------------------------------------
   5. Publication Real-Time Search & Year Filter (publicaciones.html)
   -------------------------------------------------------------------------- */
function initPublicationSearch() {
  const searchInput = document.getElementById('pubSearchInput');
  const pubCards = document.querySelectorAll('.pub-item-card');
  const yearHeaders = document.querySelectorAll('.pub-year-header');

  if (!searchInput || !pubCards.length) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    pubCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Hide year headers if no publications are visible in that year
    yearHeaders.forEach(header => {
      let nextElement = header.nextElementSibling;
      let hasVisibleChild = false;

      while (nextElement && !nextElement.classList.contains('pub-year-header')) {
        if (nextElement.classList.contains('pub-item-card') && nextElement.style.display !== 'none') {
          hasVisibleChild = true;
          break;
        }
        nextElement = nextElement.nextElementSibling;
      }

      header.style.display = (!query || hasVisibleChild) ? 'flex' : 'none';
    });
  });
}

/* --------------------------------------------------------------------------
   6. Copy Citation with Toast Notification
   -------------------------------------------------------------------------- */
function initCitationCopy() {
  const copyButtons = document.querySelectorAll('.copy-citation-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const citationText = btn.getAttribute('data-citation');
      if (!citationText) return;

      const isEn = document.documentElement.lang === 'en';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(citationText);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = citationText;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        showToast(isEn ? 'Citation copied to clipboard' : 'Cita copiada al portapapeles');
      } catch (err) {
        console.error('Error copying citation:', err);
        showToast(isEn ? 'Could not copy citation' : 'No se pudo copiar la cita');
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span class="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }

  const msgSpan = toast.querySelector('.toast-message');
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* --------------------------------------------------------------------------
   7. Back to Top Floating Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   8. Graceful Image Loading & Fallback
   -------------------------------------------------------------------------- */
function initImageFallbackHandler() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.classList.add('img-load-error');
      console.warn(`Notice: Image could not be loaded from ${this.src}`);
    });
  });
}
