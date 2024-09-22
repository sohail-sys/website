



const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);



// Video popup functionality
function showVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('video');

    // Show the modal
    modal.style.display = 'flex';

    // Play the video when the modal opens
    video.play();
}



// Ensure the close button works
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.close-btn').addEventListener('click', closeVideoModal);
});





//   countries

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
  const select = document.getElementById('country-select');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name.common;
    option.textContent = country.name.common;
    select.appendChild(option);
  });
});



// testimonial

const testimonials = [
    {
        name: "Abbie Harvey",
        text: "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.",
        image: "Assests/image 1.png"
    },
    {
        name: "John Doe",
        text: "Caring for my elderly parents has taught me the importance of love and patience. Every moment spent with them is a cherished one.",
        image: "Assests/image man.png"
    },
    {
        name: "Jane Smith",
        text: "I understand the importance of companionship for seniors. They need emotional support and respect to lead fulfilling lives.",
        image: "Assests/image woman.png"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    document.getElementById('testimonialName').innerText = testimonial.name;
    document.getElementById('testimonialText').innerText = testimonial.text;
    document.getElementById('testimonialImage').src = testimonial.image;

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Initialize with the first testimonial
updateTestimonial();



// error message for form


