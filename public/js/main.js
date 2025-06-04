// filepath: /Users/neeraj.rathor.j5m/per/portfolio/portfolio-website/public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    const zoomedProfileImage = document.getElementById('zoomedProfileImage');

    profileImage.addEventListener('click', () => {
        zoomedProfileImage.style.display = 'block'; // Show the zoomed image
        // document.body.style.overflow = 'hidden'; // Disable scrolling
    });

    zoomedProfileImage.addEventListener('click', () => {
        zoomedProfileImage.style.display = 'none'; // Hide the zoomed image
        // document.body.style.overflow = ''; // Re-enable scrolling
    });
});

function toggleSection(button) {
    const sectionContent = button.parentElement.nextElementSibling;
    if (sectionContent.style.display === "none" || !sectionContent.style.display) {
        sectionContent.style.display = "block"; // Show the section
        button.textContent = "▲"; // Change to up arrow
    } else {
        sectionContent.style.display = "none"; // Hide the section
        button.textContent = "▼"; // Change to down arrow
    }
}