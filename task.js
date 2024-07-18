let navbar = document.querySelector('.header .navbar');

// Navbar toggle
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

// Fetching travel packages
fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayPackages(data);
    })
    .catch(error => {
        console.error('Error fetching packages:', error);
    });

// Display packages function
function displayPackages(packages) {
    const packageContainer = document.querySelector('.package-container');
    packages.forEach(package => {
        const packageElement = document.createElement('div');
        packageElement.className = 'package';
        packageElement.innerHTML = `
            <img src="${package.image}" alt="${package.title}">
            <h3>${package.title}</h3>
            <p>${package.description}</p>
            <span>$${package.price}</span>
            <button class="book-now">Book Now</button>
        `;
        packageContainer.appendChild(packageElement);
    });
}

// About section image change
document.querySelectorAll('.about .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .image-container .image').src = src;
    };
});

// Slide functionality
let slides = document.querySelectorAll('.book .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
