function traitement(json){
    console.log(json.background_type)
    if (json.background_type == "one"){
        console.log("AAAAAAAA")
        let bgColor = json.background_color_1
        console.log(bgColor)
        let body = document.getElementById('main-container')
        body.style.backgroundColor = bgColor
    } else if (json.background_type == "gradiant"){
        let bgColor1 = json.background_color_1
        let bgColor2 = json.background_color_2
        let body = document.getElementById('main-container')
        body.style.backgroundColor = linear-gradient(bgColor1, bgColor2);
    } else {
        console.log("Error type not found")
    }
}


fetch('./OneColor.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de réseau');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    traitement(data)
  })
  .catch(error => {
    console.error('Erreur : ' + error);
  });