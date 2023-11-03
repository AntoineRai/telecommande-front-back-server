//TODO : Déployer le HTML sur un serveur Express

const socket = io('http://localhost:3000');

socket.on('message', (message) => {
    handleColor(message);
});

//Handling the JSON file and changing the background color
function handleColor(json) {

    let background_type = json.background_type
    let div = document.getElementById('main-container')

    switch (background_type) {
        case "one":
            let background_color = json.background_color_1

            div.style.backgroundColor = background_color
            div.style.height = "100vh"
            div.style.width = "100vw"

            break;
        case "gradient":
            let background_color_1 = json.background_color_1
            let background_color_2 = json.background_color_2
            let gradient = `linear-gradient(to right, ${background_color_1}, ${background_color_2})`

            div.style.background = gradient;
            div.style.height = "100vh"
            div.style.width = "100vw"

            break;
        default:
            console.log("Error type not found")

            break;
    }
}