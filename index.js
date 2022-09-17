window.addEventListener('scroll', function () {
    if (scrollY >= 670) {
        document.getElementById('nav').classList.remove("navbar-light") 
        document.getElementById('nav').classList.remove("bg-white") 
        document.getElementById('nav').classList.add("navbar-dark") 
        document.getElementById('nav').classList.add("bg-dark") 
    }else if(scrollY <= 670){
        document.getElementById('nav').classList.add("navbar-light") 
        document.getElementById('nav').classList.add("bg-white") 
        document.getElementById('nav').classList.remove("navbar-dark") 
        document.getElementById('nav').classList.remove("bg-dark") 
    }
  });
  if (scrollY ==0) {
        document.getElementById('nav').classList.add("navbar-light") 
        document.getElementById('nav').classList.add("bg-white") 
  }
