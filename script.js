function update() {
    addText(document.getElementById('entry').value);
    refocus();
}

function addText(text) {
    document.getElementById('textarea').innerHTML += text;
}

function refocus() {
    document.getElementById('entry').value = '';
    document.getElementById('entry').focus();
}