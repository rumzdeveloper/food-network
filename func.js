//menu.html
function scrollToForm() {
    const form = document.getElementById('order-form');
    form.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the form
}


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Order submitted!'); // Display message on button click
        });
    }
});


function adjustMenuClasses() {
    const menuItems = document.querySelectorAll('.background-specials');
    if (window.innerWidth <= 768) {
        menuItems.forEach(item => {
            item.classList.remove('background-specials'); // Remove the class
        });
    } else {
        menuItems.forEach(item => {
            item.classList.add('background-specials'); // Add the class back if needed
        });
    }
}

// Run on load and on resize
window.addEventListener('load', adjustMenuClasses);
window.addEventListener('resize', adjustMenuClasses);