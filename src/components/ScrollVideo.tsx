import { useEffect, useState } from 'react';

export const ScrollVideo = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const index = Math.min(
        images.length - 1,
        Math.floor(progress * images.length)
      );
      setCurrentIndex(index);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images.length]);

  return (
    <img
      src={images[currentIndex].src}
      alt={images[currentIndex].alt}
      style={{ width: '400px', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
    />
  );
};