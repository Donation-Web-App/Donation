export function isMobile() {
  const windowWidth = window.innerWidth;
  const breakPoint = 768;

  return windowWidth < breakPoint;
}
