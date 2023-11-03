// Importer la bibliothèque Socket.IO
const io = require('socket.io')(3000, {
    cors : {
        origin: '*',
        methods: ['GET', 'POST'],
    }
});

// Écouter les connexions entrantes
io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    // Écouter les messages envoyés par l'utilisateur
    socket.on('message', (message) => {
        console.log(`Message reçu : ${message}`);

        // Envoyer le message à tous les utilisateurs connectés
        io.emit('message', message);
    });
});
