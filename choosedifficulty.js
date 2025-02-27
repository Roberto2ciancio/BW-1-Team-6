
      const easyButton = document.getElementById('easy');
      const hardButton = document.getElementById('hard');
      const easyModeButton = document.getElementById('easy-mode');
      const hardModeButton = document.getElementById('hard-mode');

      function hideBothButtons() {
        easyModeButton.style.display = 'none';
        hardModeButton.style.display = 'none';
      }
      easyButton.addEventListener('click', () => {
        hideBothButtons();
        easyModeButton.style.display = 'block'; 
      });

    
      hardButton.addEventListener('click', () => {
        hideBothButtons(); //
        hardModeButton.style.display = 'block';
      });

      
      hideBothButtons();