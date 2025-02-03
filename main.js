let currentIndex = 0;
const items = document.querySelectorAll('.flex-shrink-0');
const totalItems = items.length;
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const container = document.getElementById('carouselContainer');

function showItem(index) {
    currentIndex = (index + totalItems) % totalItems; 
    const offset = -currentIndex * (100 / totalItems); 
    container.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => showItem(currentIndex - 1));
nextButton.addEventListener('click', () => showItem(currentIndex + 1));


setInterval(() => showItem(currentIndex + 1), 3000); 
