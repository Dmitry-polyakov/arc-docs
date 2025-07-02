// animations.js
document.addEventListener('DOMContentLoaded', function() {
  // Анимация появления элементов
  gsap.utils.toArray('.fade-in').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: parseFloat(el.getAttribute('data-delay')) || 0.1,
      ease: "power2.out"
    });
  });
  
  // Анимация карточек при наведении
  gsap.utils.toArray('.step-card, .admonition, pre').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -4,
        duration: 0.4,
        ease: "power2.out",
        boxShadow: "0 6px 20px rgba(44, 111, 187, 0.15)"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        boxShadow: "0 4px 12px rgba(44, 111, 187, 0.08)"
      });
    });
  });
  
  // Анимация для команд
  gsap.utils.toArray('.command').forEach(cmd => {
    cmd.addEventListener('mouseenter', () => {
      gsap.to(cmd, {
        y: -2,
        duration: 0.2,
        ease: "power1.out",
        backgroundColor: "rgba(44, 111, 187, 0.1)"
      });
    });
    
    cmd.addEventListener('mouseleave', () => {
      gsap.to(cmd, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        backgroundColor: "rgba(44, 111, 187, 0.06)"
      });
    });
  });
  
  // Декоративные элементы
  const container = document.querySelector('.md-main__inner');
  if (container) {
    const circle1 = document.createElement('div');
    circle1.className = 'decorative-circle circle-1';
    container.appendChild(circle1);
    
    const circle2 = document.createElement('div');
    circle2.className = 'decorative-circle circle-2';
    container.appendChild(circle2);
    
    gsap.to(circle1, {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    });
    
    gsap.to(circle2, {
      rotation: -360,
      duration: 100,
      repeat: -1,
      ease: "none"
    });
  }
});