function getRandomColor() {
    // Genera un valor hexadecimal aleatorio para un color
    const letters = '0123456789ABCDEF';// cadena que contiene los caracteres hexadecimales.
    let color = '#';
    for (let i = 0; i < 6; i++) { //Si i es igual a cero y menor a seis //i++ aumenta uno en uno
        color += letters[Math.floor(Math.random() * 16)];// Selecciona los caracteres hexadecimales de manera ramdom 
    }
    return color;//Retorna el valor 
}

document.getElementById('colorButton').addEventListener('click', function() { //Por dar click en button 
    const newColor = getRandomColor(); //Cambia a un olor ramdom
    document.body.style.backgroundColor = newColor; //cambia el fondo de color 
    document.getElementById('colorValue').textContent = newColor; //Imprime el nombre del color ramdom remplazando el otro nombre
});