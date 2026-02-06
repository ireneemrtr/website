// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a subtle cursor glow effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    if (!glow) {
        const glowElement = document.createElement('div');
        glowElement.className = 'cursor-glow';
        glowElement.style.cssText = `
            position: fixed;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(232, 220, 196, 0.03) 0%, transparent 70%);
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(glowElement);
    }
    
    const glowEl = document.querySelector('.cursor-glow');
    if (glowEl) {
        glowEl.style.left = e.clientX + 'px';
        glowEl.style.top = e.clientY + 'px';
    }
});

// Optional: Add typing effect to the name (uncomment to enable)
/*
window.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('h1');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
});
*/
