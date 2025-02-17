const articlesBtn = document.getElementById('articlesBtn');
const videosBtn = document.getElementById('videosBtn');
const articles = document.getElementById('articles');
const videos = document.getElementById('videos');
const slider = document.querySelector('.slider');

articlesBtn.addEventListener('click', () => {
  articles.classList.add('show');
  videos.classList.remove('show');
  slider.style.left = '0';
  articlesBtn.classList.add('active');
  videosBtn.classList.remove('active');
});

videosBtn.addEventListener('click', () => {
  videos.classList.add('show');
  articles.classList.remove('show');
  slider.style.left = '50%';
  videosBtn.classList.add('active');
  articlesBtn.classList.remove('active');
});
