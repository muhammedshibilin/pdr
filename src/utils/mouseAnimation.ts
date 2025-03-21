export const handleMouseMove = (event: MouseEvent, cursor: HTMLElement) => {
  const { clientX, clientY, target } = event;

  // Smooth position update
  requestAnimationFrame(() => {
    cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    cursor.style.opacity = '1';
  });

  // Interactive hover effect
  const isHoverable = !!(target as HTMLElement).closest('a, button, [role="button"], .countdown-item');
  cursor.classList.toggle('hover', isHoverable);
};
