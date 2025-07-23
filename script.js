
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
    document.querySelector('.nav-links').classList.toggle('active');
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu after clicking a link
                    document.getElementById('nav-toggle').checked = false;
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const navbar = document.querySelector('.navbar');
            const navToggle = document.getElementById('nav-toggle');
            
            if (!navbar.contains(e.target) && navToggle.checked) {
                navToggle.checked = false;
            }
        });
