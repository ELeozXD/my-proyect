document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('design-canvas');
    const ctx = canvas.getContext('2d');
    const productSelect = document.getElementById('product-select');
    const uploadImage = document.getElementById('upload-image');
    const textInput = document.getElementById('text-input');
    const addTextButton = document.getElementById('add-text');
    const applyDesignButton = document.getElementById('apply-design');

    // Ajustar el tamaño del lienzo
    canvas.width = 600;
    canvas.height = 400;

    let selectedProduct = 'tshirt'; // Default product
    let img = new Image();

    // Manejar selección de producto
    productSelect.addEventListener('change', (e) => {
        selectedProduct = e.target.value;
        // Aquí podrías cargar diferentes imágenes de producto según la selección
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar lienzo
    });

    // Manejar carga de imagen
    uploadImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            img.src = event.target.result;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Dibuja la imagen en el lienzo
            };
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    // Añadir texto al lienzo
    addTextButton.addEventListener('click', () => {
        const text = textInput.value;
        ctx.font = '30px Arial';
        ctx.fillStyle = '#000'; // Color del texto
        ctx.fillText(text, 50, 50); // Posición del texto
    });

    // Aplicar diseño (esto podría ser una función más compleja en producción)
    applyDesignButton.addEventListener('click', () => {
        alert('Diseño aplicado. ¡Gracias por tu diseño!');
        // Aquí puedes añadir código para guardar el diseño o enviarlo al servidor
    });
});
