const modeSwitch = document.getElementById('modeSwitch');
const switchText = document.getElementById('switchText');
const colorPicker2 = document.getElementById('colorPicker2');

modeSwitch.addEventListener('change', function () {
    if (modeSwitch.checked) {
        switchText.textContent = 'Dégradé';
        colorPicker2.classList.remove('hidden');
    } else {
        switchText.textContent = 'Couleur Simple';
        colorPicker2.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const colorPicker1 = document.getElementById('colorPicker1');
    const colorPicker2 = document.getElementById('colorPicker2');
    const modeSwitch = document.getElementById('modeSwitch');

    // Initialisez Socket.io et connectez-vous au serveur
    const socket = io('http://localhost:3000');
    socket.on('connect_error', function(err) {
        alert("Connection was interrupted. Please check your network.");
    });
    
    // Écoutez les changements de couleur dans le colorPicker1
    colorPicker1.addEventListener('change', function() {
        const color1 = colorPicker1.value;
        const color2 = colorPicker2.value;
        const backgroundType = modeSwitch.checked ? 'gradient' : 'one';

        const data = {
            background_type: backgroundType,
            background_color_1: color1,
            background_color_2: color2,
        };

        // Émettez les données au format JSON via Socket.io
        socket.emit('message', data);
    });

    // Écoutez les changements de couleur dans le colorPicker2
    colorPicker2.addEventListener('change', function() {
        const color1 = colorPicker1.value;
        const color2 = colorPicker2.value;
        const backgroundType = modeSwitch.checked ? 'gradient' : 'one';

        const data = {
            background_type: backgroundType,
            background_color_1: color1,
            background_color_2: color2,
        };

        // Émettez les données au format JSON via Socket.io
        socket.emit('message', data);
    });

    // Écoutez les changements d'état de la checkbox
    modeSwitch.addEventListener('change', function() {
        const color1 = colorPicker1.value;
        const color2 = colorPicker2.value;
        const backgroundType = modeSwitch.checked ? 'gradient' : 'one';

        const data = {
            background_type: backgroundType,
            background_color_1: color1,
            background_color_2: color2,
        };

        // Émettez les données au format JSON via Socket.io
        socket.emit('message', data);
    });

    // Écoutez l'événement de création de boutons
    socket.on('zone', (element) => {
        console.log(element)
        const buttonContainer = document.getElementById('buttonContainer'); // Remplacez par l'ID de votre conteneur de boutons

        for (let i = 2; i <= element.button+1; i++) {
            const button = document.createElement('button');
            button.textContent = `Zone ${i}`;
            buttonContainer.appendChild(button);
        }
    });
});