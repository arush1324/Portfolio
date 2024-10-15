
document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.contactContainer');

    // Adding a timeout to add the visible class after the page has loaded
    setTimeout(() => {
        content.classList.add('visible'); // Add 'visible' class to start animation
    }, 100); // Adjust the delay as necessary (100 milliseconds here)
});
