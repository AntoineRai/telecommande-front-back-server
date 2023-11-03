//TODO : Déployer le HTML sur un serveur Express

const socket = io('http://localhost:3000');

socket.on('message', (message) => {
    handleChange(message);
});

function handleChange(json){
    let length = json.buttons.length;
    for (let i = 0; i < length; i++) {
        handleColor(json,i)
    }
}

//Handling the JSON file and changing the background color
function handleColor(json,i) {

    let background_type = json.background_type
    let div = document.getElementById(json.buttons[i].zone)

    switch (background_type) {
        case "one":
            let background_color = json.background_color_1

            div.style.background = null;
            div.style.backgroundColor = background_color

            break;
        case "gradient":
            let background_color_1 = json.background_color_1
            let background_color_2 = json.background_color_2
            let gradient = `linear-gradient(to right, ${background_color_1}, ${background_color_2})`

            div.style.background = gradient;

            break;
        default:
            console.log("Error type not found")

            break;
    }
}

let compteurDiv = 1;

document.getElementById('plus').addEventListener('click', () => {
    compteurDiv++; // Incrémente le compteur de divs
    const mainContainer = document.getElementById("main-container");
    const newDiv = document.createElement("div");

    // Définit l'ID de la nouvelle div comme le nombre actuel du compteur
    newDiv.id = compteurDiv;

    newDiv.textContent = compteurDiv; // Affiche un numéro dans la nouvelle div
    mainContainer.appendChild(newDiv); // Ajoute la nouvelle div au conteneur principal

    socket.emit('zone', {"button" : compteurDiv});
});