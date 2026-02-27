// Highlight active nav link based on current path
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  document.querySelectorAll('.site-nav a').forEach(link => {
    const href = link.getAttribute('href');
    // Extract the section name (about, thoughts, reading) from the href
    const section = href.match(/(about|thoughts|reading)/);
    if (section && path.includes(section[1])) {
      link.classList.add('active');
    }
  });
});
