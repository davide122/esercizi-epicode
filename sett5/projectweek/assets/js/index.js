window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + '200px';
    document.getElementById("header").className=""
    
  });