export const handleMouseMove = (event: MouseEvent, cursor: HTMLElement) => {
  const { clientX, clientY } = event;
  
  // Smooth animation using CSS transform
  cursor.style.transform = `translate(${clientX - cursor.offsetWidth / 2}px, ${clientY - cursor.offsetHeight / 2}px)`;
}; 