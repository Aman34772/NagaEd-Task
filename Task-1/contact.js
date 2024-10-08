document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Function to validate email format using regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form submit event listener
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.style.display = 'none';

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate Name
        if (name === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        // Validate Email
        if (email === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Message
        if (message === '') {
            messageError.textContent = 'Please enter your message.';
            isValid = false;
        }

        if (isValid) {
            // Log input data to the console
            console.log('Contact Form Submission:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Display success message
            successMessage.style.display = 'block';

            // Optionally, reset the form
            contactForm.reset();
        }
    });
});