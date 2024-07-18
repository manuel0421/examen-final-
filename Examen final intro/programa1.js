const projects = [
    {
        image: 'img/image1.jpg',//Imagen 
        nombre: 'GRUPO DIMENSIONA S.A.C.',//costructota
        precio: '$ 50,000',//precio
        area: '70 m²'//area
    },
    {
        image: 'img/image2.jpg',
        nombre: 'VIVA Negocio Inmobiliario',
        precio: '$ 55,000',
        area: '75 m²'
    },
    {
        image: 'img/image3.jpg',
        nombre: 'Hatten | Constructora Inmobiliaria',
        precio: '$ 60,000',
        area: '80 m²'
    },
    {
        image: 'img/image4.jpg',
        nombre: 'INVERSIONES INMOBILIARIAS PB S.A.C. ',
        precio: '$ 65,000',
        area: '70 m²'
    },
    {
        image: 'img/image5.jpg',
        nombre: 'INVERSIONES INMOBILIARIAS PB S.A.C. ',
        precio: '$ 70,000',
        area: '75 m²'
    },
    {
        image: 'img/image6.jpg',
        nombre: 'CIUDARIS S.A.C',
        precio: '$ 75,000',
        area: '70 m²'
    },
    {
        image: 'img/image7.jpg',
        nombre: 'INVERSIONES POZO Y ASOCIADOS.',
        precio: '$ 80,000',
        area: '75 m²'
    },
    {
        image: 'img/image8.jpg',
        nombre: 'GADAL INVERSIONES S.A.C.',
        price: '$ 85,000',
        area: '85 m²'
    },
    {
        image: 'img/image9.jpg',
        nombre: 'Hatten | Constructora Inmobiliaria.',
        precio: '$ 90,000',
        area: '80 m²'
    },
    {
        image: 'img/image10.jpg',
        nombre: 'CIUDARIS S.A.C',
        precio: '$ 95,000',
        area: '75 m²'
    },
];

let currentIndex = 0;

function showProject(index) {
    const project = projects[index];
    document.getElementById('projectImage').src = project.image;
    document.getElementById('nombre').textContent = project.nombre;
    document.getElementById('precio').textContent = project.precio; //Imprime los elementos que hemos realizado arriba 
    document.getElementById('area').textContent = project.area;
    document.getElementById('message').textContent = '';
}
//Seleccionamos el orden de las imagenes y sus especificaciones atraves de un button 
document.getElementById('prevButton').addEventListener('click', function() { //Al darle click a atras cambia la imagen y sus especificaciones del departamento hacia atras
    if (currentIndex > 0) {
        currentIndex--;
        showProject(currentIndex);//Imprime si prsones el botton atras 
    } else {
        document.getElementById('message').textContent = 'Estás en el primer proyecto.'; //Si hace click en atras otravez en la primera imagen sale la alerta  
    }
});

document.getElementById('nextButton').addEventListener('click', function() {//Al darle click siguiente cambia la imagen hacia adelante y sus especificaciones 
    if (currentIndex < projects.length - 1) { //
        currentIndex++;//Aumenta 1 en 1
        showProject(currentIndex); //Imprime si presionas el botton siguiente
    } else {
        document.getElementById('message').textContent = 'Estás en el último proyecto.';//Si continua pesionando siguiente en la ultima imagen sale la alerta 
    }
});

// Mostrar el primer proyecto al cargar la página
showProject(currentIndex);