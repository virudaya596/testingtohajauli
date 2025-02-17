    // feedback
    let currentRating = 0;

        function setRating(rating) {
            currentRating = rating;
            const stars = document.querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.classList.toggle('selected', index < rating);
            });
        }

        function composeEmail() {
            const emailText = document.getElementById('emailText').value;
            if (emailText.trim() === '') {
                alert('Please write something before sending.');
                return;
            }
            const mailtoLink = `mailto:testtube14321@gmail.com?subject=Feedback%20To%20This%20Website&body=${encodeURIComponent(emailText)}&cc=Rating: ${currentRating} Stars`;
            window.location.href = mailtoLink;
        }
    // end feedback