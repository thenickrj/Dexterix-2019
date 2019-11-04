window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-148426864-1');

function toggleDetails() {
    var event = this.parentElement.parentElement;
    var details = event.querySelector('.details');

    details.classList.toggle('visible');
}

document.querySelectorAll('.event .btn.secondary').forEach(function(button) {
    button.addEventListener('click', toggleDetails);
});

function toggleMenu() {
    var btn = document.getElementById('mobileMenu');
    var nav = document.querySelector('header');

    btn.classList.toggle('ion-ios-menu');
    btn.classList.toggle('ion-md-close');
    nav.classList.toggle('visible');
}

function frmtSingleNum(num) {
    return ('0' + num).slice(-2);
}

function numDays() {
    var diffTime = new Date(1573790400000) - (new Date());

    var days = diffTime / (1000 * 60 * 60 * 24);
    var hours = (days % 1) * 24;
    var mins = (hours % 1) * 60;
    var secs = (mins % 1) * 60;

    document.querySelector('.countdown #days').innerText = frmtSingleNum(Math.floor(days));
    document.querySelector('.countdown #hours').innerText = frmtSingleNum(Math.floor(hours));
    document.querySelector('.countdown #minutes').innerText = frmtSingleNum(Math.floor(mins));
    document.querySelector('.countdown #seconds').innerText = frmtSingleNum(Math.floor(secs));
}