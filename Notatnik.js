function addNote() {
    let title = document.getElementById('noteTitle').value;
    let content = document.getElementById('noteContent').value;
    let pin = document.getElementById('pinCheckbox').checked;
    let date = new Date().toLocaleString();

    let note = {
        title: title,
        content: content,
        pin: pin,
        date: date
    };

    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.push(note);
    notes.sort((a, b) => b.pin - a.pin);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let noteStorage = document.getElementById('noteStorage');
    notes.forEach(function (note) {
        let noteElement = document.createElement('div');
        noteElement.classList.add('note');

        let titleElement = document.createElement('h3');
        titleElement.textContent = note.title;

        let contentElement = document.createElement('p');
        contentElement.textContent = note.content;

        let dateElement = document.createElement('p');
        dateElement.textContent = 'Data utworzenia: ' + note.date;

        noteElement.appendChild(titleElement);
        noteElement.appendChild(contentElement);
        noteElement.appendChild(dateElement);

        noteStorage.appendChild(noteElement);
    });
}

function selectColor(color) {

}
window.onload = displayNotes;