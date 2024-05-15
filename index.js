// Get all elements with the class "plus"
const plusIcons = document.querySelectorAll('.plus');

// Loop through each "plus" icon and add a click event listener
plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Find the parent .faq__card element of the clicked plus icon
        const faqCard = icon.closest('.faq__card');

        // Find the <p> element within the .faq__card
        const paragraph = faqCard.querySelector('p');

        // Toggle the display property of the <p> element
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block'; // Show the paragraph
        } else {
            paragraph.style.display = 'none'; // Hide the paragraph
        }
    });
});