import io from 'socket.io-client';
const socket = io('http://localhost:3000');

//Ce que le Frontend doit envoyer
const json = {
    background_type: "one",
    background_color_1: "#ffffff",
    background_color_2: "#000000"
}

socket.emit('message', json);


//Ce que le Backend doit recevoir
socket.on('message', (message) => {
    console.log(`Message reçu : ${message}`);
});