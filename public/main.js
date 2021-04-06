const update = document.querySelector('#update-button');

update.addEventListener('click', function (e) {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.'
        })
    })
    .then(res => { 
        if (res.ok) return res.json()
    })
    .then(response => { 
        window.location.reload();
    })
});

const deleteBtn = document.querySelector('#delete-button');

const messageDiv = document.querySelector('#message');

deleteBtn.addEventListener('click', function (e) {
    fetch('/quotes', { 
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: 'Darth Vader'
        })
    })
    .then(res => {
        if (res.ok) return res.json();
    })
    .then(data => {
        if (data === 'No quote to delete') {
            messageDiv.textContent = 'No Vader quote to delete';
        } else {
            window.location.reload();
        }
        
    })
    .catch(err => console.error(err));
})