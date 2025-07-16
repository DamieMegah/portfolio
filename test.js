const body = document.querySelector('.body');
const about = document.querySelector('.about-body');
const contact = document.querySelector('.contact');
const service = document.querySelector('.service');
const portfolio = document.querySelector('.portfolio');
const support = document.querySelector('.support');
let navbar = document.querySelector('.nav2');


  
function opacity2() {
  body.style.opacity = '1';
  about.style.opacity= '1';
  contact.style.opacity = '1';
  support.style.opacity = '1';
  portfolio.style.opacity = '1';
  service.style.opacity = '1';
}


function resetStyles() {
  about.style.display = 'none';
  contact.style.display = 'none';
  support.style.display = 'none';
  portfolio.style.display = 'none';
  service.style.display = 'none';
  body.style.display = 'none';
  navbar.classList.remove('active');
  opacity2();
  list.style.display ='none';
  hamburger.style.display ='block';

}





document.querySelector('#home')?.addEventListener('click', () => {
    resetStyles();
    body.style.display ='flex';
   
  });
  
  


document.querySelector('#about')?.addEventListener('click', () => {
    resetStyles();
   
      about.style.display = 'flex'; 

  
  });


  

document.querySelector('#contact')?.addEventListener('click', () => {
    resetStyles();
   
      contact.style.display = 'flex'; 

  
  });


  

document.querySelector('#service')?.addEventListener('click', () => {
    resetStyles();
   
      service.style.display = 'flex'; 

  });

  

document.querySelector('#portfolio')?.addEventListener('click', () => {
    resetStyles();
   
      portfolio.style.display = 'flex'; 

  
  });


  

document.querySelector('#support')?.addEventListener('click', () => {
    resetStyles();
   
      support.style.display = 'flex'; 

  
  });

  function opacity() {
    body.style.opacity = '0.5';
    about.style.opacity= '0.5';
    contact.style.opacity = '0.5';
    support.style.opacity = '0.5';
    portfolio.style.opacity = '0.5';
    service.style.opacity = '0.5';
  }



let hamburger = document.querySelector('.fa-bars'); // Select the first element with class 'fa-bars'
let list = document.querySelector('.fa-list');



hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navbar.style.opacity='1';
  list.style.display ='block'
  hamburger.style.display ='none'
  opacity();
  
});


list.addEventListener('click', () => {
  list.style.display ='none';
  hamburger.style.display ='block';
  
});


window.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove('active');
    opacity2();
    list.style.display ='none';
  hamburger.style.display ='block';
    
  }
});



// Remove the active class on scroll
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  list.style.display ='none';
  hamburger.style.display ='block';
  navbar.classList.remove('disabled');
  opacity2();
});

document.addEventListener('DOMContentLoaded', () => {
  const dark = document.querySelector('.dark');
  const light = document.querySelector('.light');
  const colorful = document.querySelector('.colorful');
  const link = document.getElementById('stylesheet');

  
  dark.addEventListener('click', () => {
    link.href = 'dark.css'; 
  });

  // Event listener for light theme
  light.addEventListener('click', () => {
    link.href = 'light.css'; 
  });

  colorful.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
      link.href = 'mobile.css';
    } else {
      link.href = 'test.css';
    }
  });

  function updateCSS() {
    if (link.getAttribute('href') === 'test.css' && window.innerWidth <= 800) {
      link.href = 'mobile.css';
    } else {
      link.href ='dark.css'
    }
  }
  window.addEventListener('resize', updateCSS);
});
 document.getElementById('learn').onclick = function () {
        let about = document.getElementById('about');
        
        // Toggle between 'none' and 'flex'
        about.style.display = (about.style.display === 'none' || about.style.display === '') ? 'flex' : 'none';
    };

