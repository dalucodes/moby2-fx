document.querySelectorAll('.question-container').forEach(container => {
    const plus = container.querySelector('.plus');
    const closeSign = container.querySelector('.closeSign');
    const lorem = container.querySelector('.Lorem');

    plus.addEventListener('click', () => {
        plus.style.display = 'none';
        closeSign.style.display = 'flex';
        lorem.style.display = 'block';
    });

    closeSign.addEventListener('click', () => {
        closeSign.style.display = 'none';
        plus.style.display = 'flex';
        lorem.style.display = 'none';
    });
});
$(document).ready(function () {
    $('nav .nav-cont').click(function () {
        $('nav .nav-cont').removeClass('active').find('a').css('color', 'black');
        $(this).addClass('active').find('a').css('color', '#1047d7');
    });
});