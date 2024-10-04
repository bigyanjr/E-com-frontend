// script.js carousel image 
const images = [
    "./img/heroProduct.png",
    "./img/headphone13.jpg",
    "./img/headphone15.jpg"
];

let currentIndex = 0;

const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    carouselImage.src = images[currentIndex];
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextBtn.addEventListener("click", nextImage);

// Auto move the carousel every 4 seconds
setInterval(nextImage, 4000);