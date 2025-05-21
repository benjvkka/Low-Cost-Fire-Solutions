document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("nav").innerHTML = `
    <!-- [ Logo ] -->
    <div class="nav-logo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/020/522/257/small_2x/fire-emoji-icon-free-png.png" alt="">
        <span>Low Cost Fire Solutions</span>
    </div>

    <!-- [ Barra de búsqueda ] -->
    <div class="nav-search-bar">
        <input type="text" placeholder="Buscar...">
        <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

    <div class="nav-right">

        <!-- [ Enlaces de navegación ] -->
        <ul class="nav-links">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="shop.html">Tienda</a></li>
            <li><a href="products.html">Productos</a></li>
        </ul>

        <!-- [ Iconos funcionales ] -->
        <div class="nav-icons">
            <a href="favs.html"><i class="fa-solid fa-bookmark"></i></a>
            <a href="shopping-cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
            <a href="account.html"><i class="fa-solid fa-user"></i></a>
        </div>

    </div>
  `;

  document.querySelector("footer").innerHTML = `
    <div class="footer-container">

        <!-- [ Información de contacto ] -->
        <section class="contact-information">

            <h4>Contacto</h4>
            <p>Email: venta@lcfs.cl</p>
            <p>Teléfono: (+56) 32 299 3827</p>
            <p>Dirección: Libertad 448, Viña del Mar, Valparaíso 2520000, Chile.</p>

        </section>

        <!-- [ Enlaces ] -->
        <section class="links">

            <h4>Información</h4>
            <ul>
                <li><a href="about.html">Sobre Nosotros</a></li>
                <li><a href="privacy-policy.html">Política de Privacidad</a></li>
                <li><a href="terms-conditions.html">Términos y Condiciones</a></li>
            </ul>

        </section>

        <!-- [ Redes sociales ] -->
        <section class="social-media">

            <h4>Redes sociales</h4>
            <a href="https://www.instagram.com/lowcostfiresolutions/?igsh=NDg4bWMxOW1lZDRr#" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="X"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook"><i class="fa-brands fa-facebook-f"></i></i></a>
        
        </section>

    </div>

        <!-- [ Copyright ] -->
    <section class="copyright">

        <p>Copyright © 2025 lcfs - Todos los derechos reservados.</p>
        
    </section>
  `;

});
