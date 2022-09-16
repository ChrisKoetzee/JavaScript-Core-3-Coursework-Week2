function getHumor() {
   
    
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let img = document.createElement('img');
        let container = document.createElement('div');
        container.appendChild(img);

        img.src = data.message;
        
        // img.appendChild(data)
    })
.catch((error) => console.log(error))


}

window.onload = getHumor();