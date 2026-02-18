// Copy PGP key function
function copyPGP() {
  const pgpText = document.querySelector('.pgp-fingerprint').innerText;
  navigator.clipboard.writeText(pgpText).then(() => {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.innerText;
    btn.innerText = 'copied!';
    setTimeout(() => {
      btn.innerText = originalText;
    }, 2000);
  });
}

// Blog filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    const posts = document.querySelectorAll('.blog-card');
    
    posts.forEach(post => {
      if (filter === 'all') {
        post.style.display = 'block';
      } else {
        const category = post.querySelector('.blog-category')?.innerText.toLowerCase();
        if (category && category.includes(filter)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      }
    });
  });
});

// Mouse glow effect
document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    glow.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(100, 255, 218, 0.06), transparent 80%)`;
  }
});

// Project cards click handler
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (!this.hasAttribute('onclick')) {
      console.log('Project card clicked - add your project URL');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
