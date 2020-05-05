
function picture(){
   
    let image = document.createElement("img");
    image.classList = "info";
    image.src = "restaurant-img.jpg";
    image.alt = "picture of the inside of a restaurant";
    content.appendChild(image);

}

export default picture;