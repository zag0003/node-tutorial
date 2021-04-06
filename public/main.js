const update = document.querySelector('#update-button');

update.addEventListener('click', function (e) {
    fetch('/quotes', {
        method: 'put'
    })
});