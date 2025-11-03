document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animation On Scroll)
    AOS.init({
        duration: 800,
        once: true, // Animations should only happen once
        easing: 'ease-in-out',
        offset: 100 // Trigger animations a little sooner
    });

    // 2. Hamburger Menu Toggle (Unique Transformation)
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        body.classList.toggle('nav-open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (body.classList.contains('nav-open')) {
                body.classList.remove('nav-open');
            }
        });
    });

    // 3. Theme Toggle (Dark/Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save preference

        // Update icon based on theme
        const icon = themeToggle.querySelector('i');
        icon.classList.remove(newTheme === 'dark' ? 'fa-moon' : 'fa-sun');
        icon.classList.add(newTheme === 'dark' ? 'fa-sun' : 'fa-moon');
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    icon.classList.add(savedTheme === 'dark' ? 'fa-sun' : 'fa-moon');


  // 4. Contact Form Submission (Placeholder for actual POST logic)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    // 1. STOP the default page refresh/submission
    e.preventDefault(); 
    
    // Get the form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // 2. SEND the data using fetch (or async/await)
    // Replace the Formspree URL with your actual one
    fetch(this.action, { 
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json' // Good practice for Formspree
        }
    })
    .then(response => {
        if (response.ok) {
            // 3. ONLY reset the form after a successful send
            alert(`Thank you ${data.name}! Your message has been sent successfully.`);
            this.reset(); 
        } else {
            // Handle error response from Formspree
            return response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "))
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            })
        }
    })
    .catch(error => {
        alert('An unexpected error occurred. Please try again.');
        console.error('Fetch error:', error);
    });
});

 const texts = [
      "SaaS it up, buttercup!🤑",
      "How would you React, If I say I love Vue😍",
      "You can vibe,I can Vite 🤝 ",
      "Tailwind? More like Tail-win!💰",
      "Flex the idea,I flex the page🥂",
    ];
    const textEl = document.getElementById('bubbleText');
    let idx = 0;
    const DISPLAY_TIME = 3000; // ms the text stays fully visible
    const FADE_TIME = 600;     // should match CSS transition

    // Initialize first text
    textEl.textContent = texts[idx];
    // allow small initial entrance
    requestAnimationFrame(()=> textEl.classList.add('visible'));

    // Cycle function
    function nextText(){
      // fade out
      textEl.classList.remove('visible');
      textEl.classList.add('out');

      // after fade-out, change text, then fade-in
      setTimeout(()=>{
        idx = (idx + 1) % texts.length;
        textEl.textContent = texts[idx];

        // reset classes to trigger fade-in
        textEl.classList.remove('out');
        // tiny delay to ensure the browser registers the class change
        requestAnimationFrame(()=> textEl.classList.add('visible'));
      }, FADE_TIME);
    }

    // Start loop: show text for DISPLAY_TIME, then transition
    setInterval(nextText, DISPLAY_TIME + FADE_TIME);

    // Optional: pause on hover for reading comfort
    document.querySelector('.wrapper').addEventListener('mouseenter', () => {
      // stop cycling by clearing interval? easier: set a paused flag
      paused = true;
    });
    document.querySelector('.wrapper').addEventListener('mouseleave', () => {
      paused = false;
    });

    // implement pause behavior (non-blocking)
    let paused = false;
    // use a manual loop instead of pure setInterval so we can pause
    (function loop(){
      const total = DISPLAY_TIME + FADE_TIME;
      setTimeout(async function step(){
        if (!paused) nextText();
        loop();
      }, total);
    })();

     const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});