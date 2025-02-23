import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
