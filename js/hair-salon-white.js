// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Example of simple JavaScript action for buttons or elements
    const elements = document.querySelectorAll('.service__name, .stylist__name, .cosmetic__name');
    elements.forEach(element => {
        element.addEventListener('click', () => {
            alert(`You clicked on ${element.textContent}`);
        });
    });
});
