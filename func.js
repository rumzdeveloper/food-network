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


