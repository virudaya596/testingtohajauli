// -----> simple Image <-----
document.querySelectorAll('.expand-icon').forEach((icon) => {
icon.addEventListener('click', (e) => {
const imgSrc = e.target.closest('.gallery-item').querySelector('img').src;
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');

popupImage.src = imgSrc; // Set the image in the pop-up
popup.style.display = 'flex'; // Show the pop-up
});
});

document.getElementById('closePopup').addEventListener('click', () => {
document.getElementById('popup').style.display = 'none'; // Hide the pop-up
});


// -----> Slide Box Image <-----
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
