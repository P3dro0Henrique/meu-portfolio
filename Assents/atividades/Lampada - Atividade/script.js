var lamp = document.getElementById("lamp");
var inter = true;

lamp.addEventListener("click", lig_desg)

function lig_desg () {
    if (inter) {
        lamp.src="assets/lamp_on.png";
        lamp.alt="Lâmpada acesa";
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
        inter = false;
    }
    else {
        lamp.src="assets/lamp_off.png";
        lamp.alt="Lâmpada apagada";
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
        inter = true;
    }
    
}


