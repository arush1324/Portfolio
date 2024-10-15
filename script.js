document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px', // No extra margin
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class when in view
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const frontContainer = document.querySelector('.frontContainer');

    // Adding a timeout to add the visible class after the page has loaded
    setTimeout(() => {
        frontContainer.classList.add('visible'); // Add 'visible' class to start animation
    }, 100); // Adjust the delay as necessary (100 milliseconds here)
});
