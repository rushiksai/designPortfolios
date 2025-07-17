
    AOS.init();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Back to top button (if needed later)
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑';
    backToTop.id = 'backToTop';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.display = 'none';
    backToTop.style.padding = '0.5rem 1rem';
    backToTop.style.border = 'none';
    backToTop.style.borderRadius = '5px';
    backToTop.style.backgroundColor = '#3498db';
    backToTop.style.color = '#fff';
    backToTop.style.cursor = 'pointer';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
