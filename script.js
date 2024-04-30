const toggle = document.getElementById('toggleDark');
const lightLink = document.getElementById('light');

toggle.addEventListener('click', function () {

    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high')) {
        lightLink.href = 'style.css';
        body.style.transition = '1s';
    } else {
        lightLink.href = 'dark.css';
        body.style.transition = '1s';
    }

})