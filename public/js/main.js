document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    if(navToggle && navList) {
      navToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
      });
    }
  });