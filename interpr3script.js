document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    alert(`${quantity} item(s) added to cart!`);
});

document.querySelector('.quick-view-btn').addEventListener('click', () => {
    document.querySelector('.quick-view-popup').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.quick-view-popup').style.display = 'none';
});

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const newImageSrc = thumbnail.src;
        mainImage.classList.add('inactive');

        setTimeout(() => {
            mainImage.src = newImageSrc;
            mainImage.classList.remove('inactive');
        }, 300);
    });
});
