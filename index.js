function clickAlert() {
    alert('I was clicked!');
}

function addingEventListener(event, callback) {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
}
addingEventListener('click', clickAlert);