// --- 1. BASE DE DATOS DE EMPRESAS Y CAMPEONATOS ---
const infoEmpresas = {
    wwe: { nombre: "World Wrestling Entertainment", logo: "assets/img/logo/wwe.png", campeonatos: { "Masculino Individual": ["Undisputed WWE Championship", "World Heavyweight Championship", "Intercontinental Championship", "United States Championship"], "Femenino Individual": ["WWE Women's Championship", "Women's World Championship"], "Parejas": ["World Tag Team Championship", "WWE Tag Team Championship", "WWE Women's Tag Team Championship"] } },
    aew: { nombre: "All Elite Wrestling", logo: "assets/img/logo/aew.png", campeonatos: { "Masculino Individual": ["AEW World Championship", "TNT Championship", "International Championship","Continental Championship", "Nacional Championship"], "Femenino Individual": ["AEW Women's World Championship", "TBS Championship"], "Parejas y Tercias": ["AEW World Tag Team Championship","AEW Women's World Tag Team Championship", "AEW World Trios Championship"] } },
    cmll: { nombre: "Consejo Mundial de Lucha Libre", logo: "assets/img/logo/CMLL.png", campeonatos: { "Masculino Individual": ["Campeonato Mundial Histórico NWA Peso Medio", "Campeonato Mundial Completo del CMLL", "Campeonato Mundial Semicompleto"], "Femenino Individual": ["Campeonato Mundial Femenil del CMLL", "Campeonato Nacional Femenil"], "Parejas y Tercias": ["Campeonato Mundial de Parejas", "Campeonato Mundial de Tríos del CMLL"] } },
    aaa: { nombre: "Lucha Libre AAA Worldwide", logo: "assets/img/logo/AAA.png", campeonatos: { "Masculino Individual": ["Megacampeonato de AAA", "Campeonato Latinoamericano AAA", "Campeonato Mundial de Peso Crucero AAA"], "Femenino Individual": ["Campeonato Reina de Reinas de AAA"], "Parejas y Tercias": ["Campeonato Mundial en Parejas de AAA", "Campeonato Mundial de Tríos de AAA", "Campeonato Mundial en Parejas Mixto"] } },
    njpw: { nombre: "New Japan Pro-Wrestling", logo: "assets/img/logo/NJPW.png", campeonatos: { "Masculino Individual": ["IWGP World Heavyweight Championship","IWGP Global Heavyweight Championship", "NEVER Openweight Championship", "IWGP Junior Heavyweight Championship"], "Femenino Individual": ["IWGP Women's Championship","STRONG Women's Championship"], "Parejas": ["IWGP Tag Team Championship", "IWGP Junior Heavyweight Tag Team Championship"] } },
    noah: { nombre: "Pro Wrestling NOAH", logo: "assets/img/logo/NOAH.png", campeonatos: { "Masculino Individual": ["GHC Heavyweight Championship", "GHC National Championship", "GHC Junior Heavyweight Championship"], "Parejas": ["GHC Tag Team Championship", "GHC Junior Heavyweight Tag Team Championship"] } }
};

// --- 2. BASE DE DATOS DE LUCHADORES SIMULADA ---
const baseDatosLuchadores = [
    { nombre: "Roman Reigns", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "120 kg", altura: "1.91 m", estilo: "Powerhouse / Brawler", img: "assets/img/roster_wwe/RomanReigns2.png" },
    { nombre: "Rhea Ripley", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Australiana", peso: "77 kg", altura: "1.70 m", estilo: "Powerhouse", img: "assets/img/roster_wwe/RheaRipley.png" },
    { nombre: "The Bloodline", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "faccion", nacionalidad: "Samoana/Estadounidense", peso: "N/A", altura: "N/A", estilo: "Facción Dominante", img: "assets/img/roster_wwe/TheBloodline.png" },
    { nombre: "Char Alexa", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Facción Dominante", img: "assets/img/roster_wwe/CharAlexa.jpg" },
    { nombre: "Legado del Fantasma", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "tercias", nacionalidad: "Mexicanos", peso: "N/A", altura: "N/A", estilo: "Strong Style", img: "assets/img/roster_wwe/fantasmalegasy.jpg" },
    { nombre: "Kenny Omega", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Canadiense", peso: "102 kg", altura: "1.83 m", estilo: "Strong Style / High Flyer", img: "assets/img/roster_aew/KennyOmega.jpg" },
    { nombre: "Kenny Omega", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Canadiense", peso: "102 kg", altura: "1.83 m", estilo: "Strong Style / High Flyer", img: "assets/img/roster_aew/O.jpg" },
    { nombre: "Don Calis Family", pais: "usa", empresa: "aew", genero: "masculino", categoria: "faccion", nacionalidad: "Mexicana/Canadiense/Estadounidense", peso: "N/A", altura: "N/A", estilo: "Facción Dominante", img: "DonCalis.png" },
    { nombre: "Sky Blue", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Canadiense", peso: "102 kg", altura: "1.83 m", estilo: "Strong Style / High Flyer", img: "SkyBlue.png" },
    { nombre: "The Conglomeration", pais: "usa", empresa: "aew", genero: "masculino", categoria: "tercias", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Strong Style", img: "TheConglomeration.png" },
    { nombre: "Divine Dominion", pais: "usa", empresa: "aew", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Powerhouse", img: "DivineDominion.png" },
    { nombre: "Mistico", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicano", peso: "79 kg", altura: "1.70 m", estilo: "Aéreo / Técnico", img: "assets/img/roster_cmll/MISTICO.png" },
    { nombre: "Persephone", pais: "mexico", empresa: "cmll", genero: "femenino", categoria: "individual", nacionalidad: "Mexicano", peso: "79 kg", altura: "1.70 m", estilo: "Strong Style", img: "Persephone.png" },
    { nombre: "Los Hermanos Chavez", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "parejas", nacionalidad: "Mexicana", peso: "Combinado 180 kg", altura: "Promedio 1.75 m", estilo: "Rudo / Clásico", img: "HermanosChavez.jpg" },
    { nombre: "El Hijo del Vikingo", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicano", peso: "72 kg", altura: "1.69 m", estilo: "High Flyer Extremo", img: "assets/img/roster_aaa/HijodelVikingo.png" },
    { nombre: "Tetsuya Naito", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonés", peso: "102 kg", altura: "1.80 m", estilo: "Técnico / Strong Style", img: "assets/img/roster_njpw/TetsuyaNaito.jpg" },
    { nombre: "Alex Windsor", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonés", peso: "102 kg", altura: "1.80 m", estilo: "Técnico / Strong Style", img: "assets/img/roster_njpw/alex-windsor.avif" },
    {nombre:"Alex Windsor", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonés", peso: "102 kg", altura: "1.80 m", estilo: "Técnico / Strong Style", img: "assets/img/roster_njpw/syuri.avif" },
    { nombre: "Naomichi Marufuji", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonés", peso: "90 kg", altura: "1.76 m", estilo: "Striker / Aéreo", img: "assets/img/roster_noah/NaomichiMarufuji.png" }
];

// --- 3. VARIABLES DEL DOM ---
let empresaActual = 'todas';
let paisActual = '';

const gridRoster = document.getElementById('roster-grid');
const perfilLuchador = document.getElementById('perfil-luchador');
const navEmpresas = document.getElementById('empresas-nav');
const headerEmpresa = document.getElementById('header-empresa');
const panelCampeonatos = document.getElementById('panel-campeonatos');
const galeriaInicio = document.getElementById('galeria-inicio');

// --- 4. INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // 4.1. Tema Claro / Oscuro
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    
    // Comprobar si había tema guardado en LocalStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        if(btnThemeToggle) btnThemeToggle.textContent = '🌑 Modo Oscuro';
    }

    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') !== 'light';
            if (isDark) {
                document.body.setAttribute('data-theme', 'light');
                btnThemeToggle.textContent = '🌑 Modo Oscuro';
                localStorage.setItem('theme', 'light');
            } else {
                document.body.removeAttribute('data-theme');
                btnThemeToggle.textContent = '🌙 Modo Claro';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // 4.2. Detectar Contexto de País
    const bodyPais = document.body.getAttribute('data-pais');
    if (bodyPais) {
        paisActual = bodyPais;
        generarBotonesEmpresas(paisActual);
        aplicarFiltros();
        
        document.getElementById('filtro-genero').addEventListener('change', aplicarFiltros);
        document.getElementById('filtro-categoria').addEventListener('change', aplicarFiltros);
    }

    // 4.3. Buscador Global
    const formBusqueda = document.getElementById('form-busqueda');
    if (formBusqueda) {
        formBusqueda.addEventListener('submit', (e) => {
            e.preventDefault();
            buscarPorNombre();
        });
    }
});

// --- 5. LOGICA DE EMPRESAS Y FILTROS ---
function generarBotonesEmpresas(pais) {
    if (!navEmpresas) return;
    
    let htmlEmpresas = '<ul>';
    if (pais === 'usa') {
        htmlEmpresas += `<li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('wwe')">WWE</button></li>
                         <li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('aew')">AEW</button></li>`;
    } else if (pais === 'mexico') {
        htmlEmpresas += `<li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('cmll')">CMLL</button></li>
                         <li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('aaa')">AAA</button></li>`;
    } else if (pais === 'japon') {
        htmlEmpresas += `<li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('njpw')">NJPW</button></li>
                         <li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('noah')">NOAH</button></li>`;
    }
    htmlEmpresas += '</ul>';
    navEmpresas.innerHTML = htmlEmpresas;
}

function seleccionarEmpresa(empresaKey) {
    empresaActual = empresaKey;
    const info = infoEmpresas[empresaKey];

    // Cambiar cabecera
    document.getElementById('logo-empresa').src = info.logo;
    document.getElementById('nombre-empresa').textContent = info.nombre;
    headerEmpresa.classList.remove('oculto');
    panelCampeonatos.classList.remove('oculto');
    
    // Poblar Campeonatos con Imágenes Desplegables
    const contenedorCamps = document.getElementById('lista-campeonatos');
    contenedorCamps.innerHTML = '';
    
    for (const [categoria, lista] of Object.entries(info.campeonatos)) {
        let htmlCat = `<div class="cat-campeonato">${categoria}</div><ul class="lista-camp-ul">`;
        
        lista.forEach(camp => { 
            const nombreFormateado = camp.replace(/ /g, '_').toLowerCase() + '.png';
            const imgPlaceholder = `https://via.placeholder.com/300x150/1e293b/fbbf24?text=${encodeURIComponent(camp)}`;
            
            htmlCat += `
                <li class="camp-item" onclick="toggleCampImg(this)">
                    🏆 ${camp} <span>▼</span>
                    <img class="camp-img" src="assets/img/campeonatos/${nombreFormateado}" onerror="this.src='assets/img/campeonatos/${imgPlaceholder}'" alt="${camp}">
                </li>`; 
        });
        
        htmlCat += `</ul>`;
        contenedorCamps.innerHTML += htmlCat;
    }

    aplicarFiltros();
}

window.toggleCampImg = function(elementoLista) {
    const imagen = elementoLista.querySelector('.camp-img');
    const icono = elementoLista.querySelector('span');
    
    if (imagen.classList.contains('mostrar')) {
        imagen.classList.remove('mostrar');
        icono.textContent = '▼';
    } else {
        imagen.classList.add('mostrar');
        icono.textContent = '▲';
    }
}

function aplicarFiltros() {
    if (!gridRoster) return;

    const generoFiltro = document.getElementById('filtro-genero').value;
    const categoriaFiltro = document.getElementById('filtro-categoria').value;

    const resultados = baseDatosLuchadores.filter(luchador => {
        const coincidePais = luchador.pais === paisActual;
        const coincideEmpresa = (empresaActual === 'todas') || (luchador.empresa === empresaActual);
        const coincideGenero = (generoFiltro === 'todos') || (luchador.genero === generoFiltro);
        const coincideCategoria = (categoriaFiltro === 'todos') || (luchador.categoria === categoriaFiltro);
        return coincidePais && coincideEmpresa && coincideGenero && coincideCategoria;
    });

    renderizarRoster(resultados);
}

function renderizarRoster(arregloLuchadores) {
    perfilLuchador.classList.add('oculto');
    if (headerEmpresa && empresaActual !== 'todas') headerEmpresa.classList.remove('oculto');
    if (navEmpresas) navEmpresas.classList.remove('oculto');
    gridRoster.classList.remove('oculto');
    gridRoster.innerHTML = '';

    if (arregloLuchadores.length === 0) {
        gridRoster.innerHTML = '<p>No hay luchadores registrados con estos filtros.</p>';
        return;
    }

    arregloLuchadores.forEach(luchador => {
        const card = document.createElement('div');
        // Dinamiza la clase CSS para que agarre el var(--brand-color) de la empresa
        card.className = `card-luchador card-${luchador.empresa.toLowerCase()}`;
        card.innerHTML = `
            <img src="${luchador.img}" alt="${luchador.nombre}" onerror="this.src='https://via.placeholder.com/300x400/222/fff?text=Sin+Foto'">
            <h3>${luchador.nombre}</h3>
            <p class="tag-empresa">${luchador.empresa.toUpperCase()}</p><br>
            <button type="button" onclick='animarYMostrarPerfil(this, ${JSON.stringify(luchador)})'>Ver Ficha</button>
        `;
        gridRoster.appendChild(card);
    });
}

// --- 6. ANIMACIÓN DE GIRO Y MOSTRAR PERFIL ---
window.animarYMostrarPerfil = function(btnElement, luchador) {
    const card = btnElement.closest('.card-luchador');
    card.classList.add('spin-flip');
    
    // Espera que termine la animación (800ms)
    setTimeout(() => {
        mostrarPerfil(luchador);
        card.classList.remove('spin-flip');
    }, 800);
}

window.mostrarPerfil = function(luchador) {
    if (galeriaInicio) galeriaInicio.classList.add('oculto');
    if (gridRoster) gridRoster.classList.add('oculto');
    if (panelCampeonatos) panelCampeonatos.classList.add('oculto');
    if (headerEmpresa) headerEmpresa.classList.add('oculto');
    if (navEmpresas) navEmpresas.classList.add('oculto');
    if (document.getElementById('filtros-nav')) document.getElementById('filtros-nav').classList.add('oculto');
    
    perfilLuchador.classList.remove('oculto');

    perfilLuchador.innerHTML = `
        <img class="perfil-img" src="${luchador.img}" alt="${luchador.nombre}" onerror="this.src='https://via.placeholder.com/300x400/222/fff?text=Sin+Foto'">
        <div class="perfil-info">
            <h2>${luchador.nombre}</h2>
            <span class="tag-empresa">${luchador.empresa.toUpperCase()} - ${luchador.pais.toUpperCase()}</span>
            <p><strong>Categoría:</strong> <span style="text-transform: capitalize;">${luchador.categoria}</span> (${luchador.genero})</p>
            <p><strong>Nacionalidad:</strong> ${luchador.nacionalidad}</p>
            <p><strong>Estilo de Lucha:</strong> ${luchador.estilo}</p>
            <p><strong>Altura:</strong> ${luchador.altura}</p>
            <p><strong>Peso:</strong> ${luchador.peso}</p>
            <br><br>
            <button class="btn-pais" onclick="location.reload()">Regresar al Roster</button>
        </div>
    `;
};

// --- 7. BUSCADOR ---
function buscarPorNombre() {
    const query = document.getElementById('busqueda').value.toLowerCase().trim();
    const mensajeError = document.getElementById('mensaje-error');
    if (!query) return;

    const resultado = baseDatosLuchadores.find(l => l.nombre.toLowerCase().includes(query));

    if (resultado) {
        mensajeError.classList.add('oculto');
        mostrarPerfil(resultado);
    } else {
        mensajeError.classList.remove('oculto');
        perfilLuchador.classList.add('oculto');
    }
}
