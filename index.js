function addingEventListener() {
    alert('I have been clicked')
    let input = document.getElementById('button');
input.addEventListener('click', addingEventListener)
}

addingEventListener()