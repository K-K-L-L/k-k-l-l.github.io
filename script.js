document.addEventListener('DOMContentLoaded', function () {
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("has-fade-in")) {
                entry.target.classList.add("is-inViewport", "has-fade-in");
                observer.unobserve(entry.target); // Stop observing once the fade-in has occurred
            }
        });
    };

    const obsOptions = {
        root: null,
        threshold: 0.5,
    };

    const Obs = new IntersectionObserver(inViewport, obsOptions);

    document.querySelectorAll('[data-inviewport]').forEach(el => {
        Obs.observe(el);
    });


    // Attach click event to the "Explore Services" button
    const exploreServicesButton = document.querySelector('.button.glow-animation');
    if (exploreServicesButton) {
        exploreServicesButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior for anchor links
            scrollToServices();
        });
    }

    setInterval(createSparkle, 1000);
  
    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
  
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
  
        sparkle.style.top = randomY + "px";
        sparkle.style.left = randomX + "px";
  
        document.body.appendChild(sparkle);
  
        // Remove the sparkle element after the animation completes
        setTimeout(() => {
          sparkle.remove();
        }, 2000); // Adjust the duration of the sparkle animation
      }
});

function scrollToServices() {
    const element = document.getElementsByClassName("service-container")[0];
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
