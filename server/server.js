// Importer la bibliothèque Socket.IO
const io = require('socket.io')(3000);

// Écouter les connexions entrantes
io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    // Envoyer un message à l'utilisateur connecté
    socket.emit('message', 'Bienvenue sur le serveur WebSocket !');

    // Écouter les messages envoyés par l'utilisateur
    socket.on('message', (message) => {
        console.log(`Message reçu : ${message}`);

        // Envoyer le message à tous les utilisateurs connectés
        io.emit('message', message);
    });

    // Gérer la déconnexion de l'utilisateur
    socket.on('disconnect', () => {
        console.log('Un utilisateur s\'est déconnecté');
    });
});
