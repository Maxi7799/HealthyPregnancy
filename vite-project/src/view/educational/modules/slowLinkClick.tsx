const smoothScrollTo = (targetY: number, duration: number) => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const scroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startY, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(scroll);
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(scroll);
};

// Updated links with smooth scroll
const handleLinkClick = (
  e: React.MouseEvent<HTMLElement>,
  sectionId: string
) => {
  e.preventDefault();
  const targetElement = document.querySelector(sectionId);
  if (targetElement) {
    const targetY =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    smoothScrollTo(targetY, 1000); // 1000ms (1 second) for slower scroll
  }
};

export default handleLinkClick;