const toggle = document.getElementById('toggleDark');
const lightLink = document.getElementById('light');
const themeName = document.getElementById('themeName');

toggle.addEventListener('click', function () {

    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high')) {
        lightLink.href = 'style.css';
        themeName.innerHTML='Day';
        body.style.transition = '1s';
    } else {
        lightLink.href = 'dark.css';
        themeName.innerHTML='Night';
        body.style.transition = '1s';
    }

})