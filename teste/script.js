const li1111 = document.querySelector('.li-1111');
const iframeContainer = li1111.querySelector('.li-iframe');

li1111.addEventListener('mouseenter', () => {
  iframeContainer.classList.add('active');
});

li1111.addEventListener('mouseleave', () => {
  iframeContainer.classList.remove('active');
});