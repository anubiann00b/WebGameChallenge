var state = "name";
var name;

function update() {
    var entry = document.getElementById('entry').value;
    switch(state) {
        case "name":
            name = entry;
            addText("Welcome, " + name);
            state = "intro";
            break;
        default:
            addText(name + " says, '" + entry + "'");
            break;
    }

    refocus();
}

function addText(text) {
    document.getElementById('textarea').innerHTML += "<div>" + text  + "<\div>";
}

function refocus() {
    document.getElementById('entry').value = '';
    document.getElementById('entry').focus();
}