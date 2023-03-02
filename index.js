
document.addEventListener('DOMContentLoaded', function() {
    var navIcon = document.querySelector('#header__icon');
    
      navIcon.addEventListener('click', function() {
        this.classList.toggle('open');
      });
    
  });
  