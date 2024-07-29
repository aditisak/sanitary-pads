document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.getAttribute('href').startsWith('#')) {
            document.querySelectorAll('.donation-form').forEach(form => {
                form.classList.remove('active');
            });
            document.querySelector(this.getAttribute('href')).classList.add('active');
        }
    });
});

document.getElementById('physical-donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
});

document.getElementById('monetary-donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'new-page.html'; // Change this URL to the new page
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('thank-you-message').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === document.getElementById('thank-you-message')) {
        document.getElementById('thank-you-message').style.display = 'none';
    }
};
