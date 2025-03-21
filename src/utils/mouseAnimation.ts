export const handleMouseMove = (event: MouseEvent, cursor: HTMLElement) => {
  const { clientX, clientY } = event;
  
  // Smoother movement with lower lag value
  const lag = 0.1;
  const targetX = clientX - cursor.offsetWidth / 2;
  const targetY = clientY - cursor.offsetHeight / 2;
  
  // Get current position with fallback to target position
  const currentTransform = cursor.style.transform;
  const currentX = currentTransform ? parseFloat(currentTransform.split('translate(')[1]) || targetX : targetX;
  const currentY = currentTransform ? parseFloat(currentTransform.split(',')[1]) || targetY : targetY;
  
  // Smooth interpolation
  const newX = currentX + (targetX - currentX) * lag;
  const newY = currentY + (targetY - currentY) * lag;
  
  // Apply transform
  cursor.style.transform = `translate(${newX}px, ${newY}px)`;
  
  // Calculate speed for scaling effect
  const speed = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));
  const scale = Math.min(1 + speed * 0.002, 1.5);
  
  // Apply scale and update cursor size based on movement
  cursor.style.width = `${30 * scale}px`;
  cursor.style.height = `${30 * scale}px`;
}; 