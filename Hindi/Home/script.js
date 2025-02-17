
    // Sliding Pictures
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    // End Sliding Pictures

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