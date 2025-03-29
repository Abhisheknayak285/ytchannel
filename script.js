document.addEventListener('DOMContentLoaded', () => {
    // ... (rest of your video item and hamburger menu code)

    // Form submission to Google Apps Script
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const formProps = Object.fromEntries(formData);

            fetch('https://script.google.com/macros/s/AKfycbzarb4lnt0U8pWhrypGG8wJPq2QnDBG7uC7arL8uXrmHN25MvDhiPieynzkDwtBPeui/exec', { // Replace with your web app URL
                method: 'POST',
                mode: 'no-cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formProps).toString()
            })
            .then(response => {
                console.log('Form submitted successfully!');
                form.reset();
                showNotification('Done'); // Show "Done" notification
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                showNotification('Error', true); // show error notification
            });
        });
    }

    function showNotification(message, isError = false) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.background = isError ? '#f44336' : '#4CAF50'; // Red for error, green for success
        notification.style.color = 'white';
        notification.style.padding = '15px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0'; // Start invisible
        notification.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        notification.style.transform = 'translateY(-20px)'; // Start off-screen

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        // Animate out after a delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500); // Remove after fade out
        }, 3000); // Display for 3 seconds
    }
});
