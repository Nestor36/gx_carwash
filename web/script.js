
function message(t, m, c, i){
    let tittle = document.getElementById("tittle");
    let message = document.getElementById("message");
    let color = document.getElementById("color");
    let image = document.getElementById("image");


    tittle.innerHTML = t;
    message.innerHTML = m;
    color.classList.add(c);

    image.src = "./" + i + ".gif";
};

document.addEventListener("DOMContentLoaded", function() {

    message(
      "ADVERTENCIA", /* tittle */
      "Gracias por utilizar el script :3 ", /* description */
      "red", /* color */
      "bmo" /* gif */
    );

});




