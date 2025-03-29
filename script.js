document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove the class from any other currently animated item (optional)
            videoItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('animated')) {
                    otherItem.classList.remove('animated');
                }
            });

            // Add the animated class to the clicked item
            item.classList.add('animated');

            // Remove the animated class after a delay
            setTimeout(() => {
                item.classList.remove('animated');
            }, 500); // Adjust the delay (in milliseconds) as needed
        });
    });

    // Add JavaScript for the hamburger menu (if you haven't already)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
