// JavaScript para Filtros de productos
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        // Agregar clase active al botón clickeado
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        productItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});