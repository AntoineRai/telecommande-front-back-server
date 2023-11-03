import io from 'socket.io-client';
const socket = io('http://localhost:3000');

//Ce que le Frontend doit envoyer
const json = {
    background_type: "gradient",
    background_color_1: "#32a852",
    background_color_2: "#DADADA"
}

socket.emit('message', json);


//Ce que le Backend doit recevoir
//socket.on('message', (message) => {
//    console.log(`Message reçu : ${message}`);
//});