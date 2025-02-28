const easyButton = document.getElementById('easy');
const hardButton = document.getElementById('hard');
const easyModeButton = document.getElementById('easy-mode');
const hardModeButton = document.getElementById('hard-mode');

function hideBothButtons() {
  easyModeButton.style.display = 'none';
  hardModeButton.style.display = 'none';
  easyButton.classList.remove('active');
  hardButton.classList.remove('active');
}

easyButton.addEventListener('click', () => {
  hideBothButtons();
  easyModeButton.style.display = 'block';
  easyButton.classList.add('active');
});

hardButton.addEventListener('click', () => {
  hideBothButtons();
  hardModeButton.style.display = 'block';
  hardButton.classList.add('active');
});

hideBothButtons();