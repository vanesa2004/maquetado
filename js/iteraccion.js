// Obtiene referencias a los elementos HTML
const menu = document.getElementById('menu');
const contenido = document.getElementById('contenido');

// Datos de ejemplo para las categorías, subcategorías y medicamentos
const categorias = ["Salud y medicamentos", "Cuidado del la piel", "Cuidado del cabello"];
const subcategorias = {
    "Salud y medicamentos": ["Alibio de dolor", "Dolor fuerte", "Dolor general"],
    "Cuidado del la piel": ["Cuidado solar", "cuidado corporal"],
    "Cuidado del cabello": ["Shampoo", "Tintes"]
};
const medicamentos = {
    "Alibio de dolor": [
        { laboratorio:"pfazer", nombre: "Dolex 500 mg Fracción x 10 Tabletas", precio: 5.950, descripcion: "Alivia el dolor leve a moderado", imagen:"dolex.jpeg" },
        { nombre: "Dolex Bebés Acetaminofén 160mg/5ml Jarabe Frasco Sabor Frambuesa x 60 ml2", precio: 13.900, descripcion: "Bebés de 1 a 24 meses: Elija la dosis según el peso actual del bebé (use la edad únicamente como guía)" }
    ],
    "Dolor general": [
        { nombre: "Protector Solar Nivea Sun Facial Q10 Antiedad FPS50 x 50 ml", precio: 30-600, descripcion: "Protector solar, Protección facial inmediata y eficaz, Combate lineas de expresión, arrugas y manchas, Sensación ligera, no grasosa." },
        { nombre: "Crema Corporal  Coco Vainilla", precio: 11.920, descripcion: "Es de rápida absorción y no queda grasoso, tiene un olor delicioso, trae mucho contenido por su precio" }
    ],
    "Cuidado solar": [
        { nombre: "Shampoo Elvive Pure Ácido", precio: 24.000, descripcion: "Shampoo Pure con Ácido Hialurónico + Ácido Salicílico, Sin silicona, Purifica el cuero" },
        { nombre: "Decolorante Igora Blonde x 10 gr", precio: 11.950, descripcion: "Fórmula Alemana de alto desempeño, decoloracion intensa, rapida y uniforme" }
    ],
    "cuidado corporal": [
        { nombre: "Shampoo Elvive Pure Ácido", precio: 24.000, descripcion: "Shampoo Pure con Ácido Hialurónico + Ácido Salicílico, Sin silicona, Purifica el cuero" },
        { nombre: "Decolorante Igora Blonde x 10 gr", precio: 11.950, descripcion: "Fórmula Alemana de alto desempeño, decoloracion intensa, rapida y uniforme" }
    ],
    "Shampoo": [
        { nombre: "Shampoo Elvive Pure Ácido", precio: 24.000, descripcion: "Shampoo Pure con Ácido Hialurónico + Ácido Salicílico, Sin silicona, Purifica el cuero" },
        { nombre: "Decolorante Igora Blonde x 10 gr", precio: 11.950, descripcion: "Fórmula Alemana de alto desempeño, decoloracion intensa, rapida y uniforme" }
    ],
    "Tintes": [
        { nombre: "Shampoo Elvive Pure Ácido", precio: 24.000, descripcion: "Shampoo Pure con Ácido Hialurónico + Ácido Salicílico, Sin silicona, Purifica el cuero" },
        { nombre: "Decolorante Igora Blonde x 10 gr", precio: 11.950, descripcion: "Fórmula Alemana de alto desempeño, decoloracion intensa, rapida y uniforme" }
    ],
    // Define datos para otras subcategorías aquí
};

// Función para cargar y mostrar las categorías en el menú
function mostrarCategorias() {
    menu.innerHTML = '';
    categorias.forEach(categoria => {
        const categoriaElement = document.createElement('div');
        categoriaElement.classList.add('categoria');
        categoriaElement.textContent = categoria;
        menu.appendChild(categoriaElement);

        categoriaElement.addEventListener('click', (event) => {
            const categoriaSeleccionada = event.target.textContent;
            mostrarSubcategoriasYMedicamentos(categoriaSeleccionada);
        });
    });
}

// Función para mostrar subcategorías y medicamentos en el contenido
function mostrarSubcategoriasYMedicamentos(categoria) {
    contenido.innerHTML = '';
    if (subcategorias[categoria]) {
        subcategorias[categoria].forEach(subcategoria => {
            const subcategoriaElement = document.createElement('div');
            subcategoriaElement.classList.add('subcategoria');
            subcategoriaElement.textContent = subcategoria;
            contenido.appendChild(subcategoriaElement);

            subcategoriaElement.addEventListener('click', () => {
                mostrarMedicamentos(subcategoria);
            });
        });
    }
}

// Función para mostrar medicamentos en el contenido
function mostrarMedicamentos(subcategoria) {
    contenido.innerHTML = '';
    if (medicamentos[subcategoria]) {
        medicamentos[subcategoria].forEach(medicamento => {
            const medicamentoElement = document.createElement('div');
            medicamentoElement.classList.add('medicamento');
            medicamentoElement.innerHTML = `
                <img src="../img/${medicamento.imagen}" alt="${medicamento.nombre}">
                <p>Laboratorio: ${medicamento.laboratorio}</p>
                <p>Nombre: ${medicamento.nombre}</p>
                <p>Precio: $${medicamento.precio}</p>
            `;
            contenido.appendChild(medicamentoElement);

            medicamentoElement.addEventListener('click', () => {
                mostrarDetalleMedicamento(medicamento);
            });
        });
    }
}

// Función para mostrar los detalles de un medicamento
function mostrarDetalleMedicamento(medicamento) {
    contenido.innerHTML = '';
    const detalleMedicamentoElement = document.createElement('div');
    detalleMedicamentoElement.classList.add('detalle-medicamento');
    detalleMedicamentoElement.innerHTML = `
        <img src="../img/dolex.jpeg" alt="${medicamento.nombre}">
        <h2>${medicamento.nombre}</h2>
        <p>Precio: $${medicamento.precio}</p>
        <p>Descripción: ${medicamento.descripcion}</p>
    `;
    contenido.appendChild(detalleMedicamentoElement);

    // Botón para volver a la lista de medicamentos
    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver a la lista de medicamentos';
    volverButton.addEventListener('click', () => {
        mostrarMedicamentos();
    });
    detalleMedicamentoElement.appendChild(volverButton);
}

// Cargar las categorías al cargar la página
mostrarCategorias();