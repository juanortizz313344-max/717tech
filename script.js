document.addEventListener("DOMContentLoaded", () => {
    
    // 🗄️ BASE DE DATOS EN PESOS ARGENTINOS (ARS) - INTACTA COMO ANTES
    const productos = {
          logitech: [
            { 
                id: "l1", name: "G Pro X Superlight", category: "Mouse Wireless", price: "$149.99", image: "images/logitech/gpro.jpg",
                description: "Diseñado con los profesionales de esports. Ultra liviano con menos de 63 gramos, tecnología inalámbrica LIGHTSPEED de grado profesional y sensor HERO 25K para una precisión milimétrica.",
                colors: ["#000000", "#ffffff"],
                imagesByColor: {
                    "#000000": [
                        "images/logitech/gpronegro1.png", 
                        "images/logitech/gpronegro2.webp", 
                        "images/logitech/gpronegro3.jpg", 
                    ],
                    "#ffffff": [
                        "images/logitech/gprox1.jpg", 
                        "images/logitech/gprox2.webp",
                        "images/logitech/gprox3.png",
                    ]
                }
            },
            { 
                id: "l2", name: "Logitech G203", category: "Teclado RGB", price: "$229.99", image: "images/logitech/g203portada.png",
                description: "Tecnología inalámbrica LIGHTSPEED, RGB LIGHTSYNC avanzada y selectores mecánicos de perfil bajo y alto rendimiento. Construido con materiales premium de alta resistencia.",
                colors: ["#000000", "#ffffff"],
                imagesByColor: {
                    "#000000": [
                        "images/logitech/g203negro1.jpg", 
                        "images/logitech/g203negro2.webp", 
                        "images/logitech/g203negro3.webp", 
                    ],
                    "#ffffff": [
                        "images/logitech/g203blanco1.webp", 
                        "images/logitech/g203blanco2.webp",
                        "images/logitech/g203blanco3.webp",
                    ]
                }
            },
        ],
        redragon: [
             { 
                id: "r1", name: "Redragon Kumara K552 RGB", category: "Teclado Mecánico", price: "$49.99", image: "images/redragon/kumara1.png",
                description: "Estructura de aluminio y ABS de alta resistencia, switches táctiles Outemu Blue y retroiluminación RGB configurable de nivel competitivo.",
                colors: ["#000000", "#ffffff"],
                imagesByColor: {
                    "#000000": [
                        "images/redragon/kumaranegro1.png", 
                        "images/redragon/kumaranegro1.png", 
                        "images/redragon/kumaranegro1.png", 
                        "images/redragon/kumaranegro1.png"
                    ],
                    "#ffffff": [
                        "images/redragon/kumaraw2.png", 
                        "images/redragon/kumaraw2.png", 
                        "images/redragon/kumaraw2.png", 
                        "images/redragon/kumaraw2.png"
                    ]
                }
            },
            ,
{
    id: "r2",
    name: "Redragon Fizz Pro",
    category: "Teclado Mecánico",
    price: "$70.000",
    image: "images/redragon/default.png",
    description: "Teclado mecánico compacto inalámbrico con iluminación RGB.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png","images/redragon/default.png","images/redragon/default.png"]
    }
},
{
    id: "r3",
    name: "Redragon Ucal Magnetic",
    category: "Teclado Mecánico",
    price: "$85.000",
    image: "images/redragon/default.png",
    description: "Teclado magnético gamer de alta precisión.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png","images/redragon/default.png","images/redragon/default.png"]
    }
},
{
    id: "r4",
    name: "Redragon Hylas",
    category: "Auricular Gamer",
    price: "$45.000",
    image: "images/redragon/default.png",
    description: "Auricular gamer con micrófono flexible.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png","images/redragon/default.png","images/redragon/default.png"]
    }
},

{
    id: "r4",
    name: "Redragon Saturn",
    category: "Joystick",
    price: "$32.000",
    image: "images/redragon/default.png",
    description: "Joystick gamer para PC.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png"]
    }
},
{
    id: "r5",
    name: "Redragon Harrow Pro",
    category: "Joystick",
    price: "$55.000",
    image: "images/redragon/default.png",
    description: "Joystick inalámbrico gamer.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png"]
    }
},
{
    id: "r6",
    name: "Redragon Darkflame",
    category: "Joystick",
    price: "$75.000",
    image: "images/redragon/default.png",
    description: "Joystick premium para gaming competitivo.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png"]
    }
},
{
    id: "r8",
    name: "Redragon Ire Pro",
    category: "Auricular Gamer",
    price: "$75.000",
    image: "images/redragon/default.png",
    description: "Auricular gamer premium.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png"]
    }
},
{
    id: "r9",
    name: "Redragon Zeus Pro",
    category: "Auricular Gamer",
    price: "$130.000",
    image: "images/redragon/default.png",
    description: "Auricular tope de gama con sonido envolvente.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/redragon/default.png"]
    }
}
        ],
        tdagger: [
            {
                id: "t1", name: "T-Dagger Bora T-TGK315", category: "Teclado Mecánico TKL", price: "$52.000", image: "images/tdagger/boranegro.png",
                description: "Teclado mecánico formato TKL de diseño compacto y robusto. Cuenta con switches T-Dagger Blue, teclas de doble inyección y retroiluminación fluida.",
                colors: ["#000000", "#ffffff"],
                imagesByColor: {
                    "#000000": ["images/tdagger/boranegro.png", "images/tdagger/boranegro.png", "images/tdagger/boranegro.png", "images/tdagger/boranegro.png"],
                    "#ffffff": ["images/tdagger/borablanco.png", "images/tdagger/borablanco.png", "images/tdagger/borablanco.png", "images/tdagger/borablanco.png"]
                }
            }
            ,
{
    id: "t2",
    name: "T-Dagger Arena",
    category: "Teclado Mecánico",
    price: "$37.000",
    image: "images/tdagger/default.png",
    description: "Teclado mecánico gamer con iluminación RGB.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/tdagger/default.png","images/tdagger/default.png","images/tdagger/default.png"]
    }
},
{
    id: "t3",
    name: "T-Dagger Sona",
    category: "Auricular Gamer",
    price: "$57.000",
    image: "images/tdagger/default.png",
    description: "Auricular gamer cómodo para sesiones prolongadas.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/tdagger/default.png","images/tdagger/default.png","images/tdagger/default.png"]
    }
}
        ],
        havit: [
            {
                id: "h1", name: "Havi H2002D Gaming", category: "Auriculares 7.1", price: "$45.000", image: "images/havit/h2002d.png",
                description: "Auriculares premium cableados de alta fidelidad. Diseño con copas de aleación ligera, almohadillas de memoria ultra suaves y micrófono desmontable.",
                colors: ["#000000"],
                imagesByColor: {
                    "#000000": ["images/havit/h2002d.png", "images/havit/h2002d.png", "images/havit/h2002d.png", "images/havit/h2002d.png"]
                }
            }
            ,
{
    id: "h2",
    name: "Mouse Havit",
    category: "Mouse Gamer",
    price: "$12.500",
    image: "images/havit/default.png",
    description: "Mouse gamer ergonómico con iluminación LED.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/havit/default.png","images/havit/default.png","images/havit/default.png"]
    }
},
{
    id: "h3",
    name: "Havit MS1029",
    category: "Mouse Gamer",
    price: "$15.000",
    image: "images/havit/default.png",
    description: "Mouse gamer de precisión.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/havit/default.png","images/havit/default.png","images/havit/default.png"]
    }
},
{
    id: "h4",
    name: "Havit H2230",
    category: "Auricular Gamer",
    price: "$35.000",
    image: "images/havit/default.png",
    description: "Auricular gamer con micrófono integrado.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/havit/default.png","images/havit/default.png","images/havit/default.png"]
    }
}
        ], 
        samsung: [
{
    id: "s1",
    name: "Cargador Samsung 25W",
    category: "Cargador",
    price: "$18.000",
    image: "images/samsung/default.png",
    description: "Cargador Samsung con carga rápida de 25W compatible con dispositivos USB-C.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/samsung/default.png","images/samsung/default.png","images/samsung/default.png"]
    }
},
{
    id: "s2",
    name: "Cargador Samsung 65W",
    category: "Cargador",
    price: "$30.000",
    image: "images/samsung/default.png",
    description: "Cargador Samsung de carga ultra rápida de 65W para smartphones, tablets y notebooks compatibles.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/samsung/default.png","images/samsung/default.png","images/samsung/default.png"]
    }
},
{
    id: "s3",
    name: "Cargador Samsung Réplica 45W",
    category: "Cargador",
    price: "$12.000",
    image: "images/samsung/default.png",
    description: "Cabezal compatible Samsung con potencia de carga de 45W.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/samsung/default.png","images/samsung/default.png","images/samsung/default.png"]
    }
},
{
    id: "s4",
    name: "Cable USB-C a USB-C Samsung",
    category: "Cable",
    price: "$5.000",
    image: "images/samsung/default.png",
    description: "Cable USB-C a USB-C compatible con carga rápida y transferencia de datos.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/samsung/default.png","images/samsung/default.png","images/samsung/default.png"]
    }
},
{
    id: "s5",
    name: "Cable USB a USB-C Samsung",
    category: "Cable",
    price: "$4.500",
    image: "images/samsung/default.png",
    description: "Cable USB a USB-C compatible con carga y sincronización.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/samsung/default.png","images/samsung/default.png","images/samsung/default.png"]
    }
}
],

apple: [
{
    id: "a1",
    name: "Cabezal iPhone 20W",
    category: "Cargador",
    price: "$12.000",
    image: "images/apple/default.png",
    description: "Adaptador de corriente compatible con carga rápida para iPhone.",
    colors: ["#ffffff"],
    imagesByColor: {
        "#ffffff": ["images/apple/default.png","images/apple/default.png","images/apple/default.png"]
    }
},
{
    id: "a2",
    name: "Cabezal iPhone Réplica 35W",
    category: "Cargador",
    price: "$7.500",
    image: "images/apple/default.png",
    description: "Cabezal compatible iPhone con soporte para carga rápida.",
    colors: ["#ffffff"],
    imagesByColor: {
        "#ffffff": ["images/apple/default.png","images/apple/default.png","images/apple/default.png"]
    }
},
{
    id: "a3",
    name: "Cable USB-C a Lightning 2M",
    category: "Cable",
    price: "$15.000",
    image: "images/apple/default.png",
    description: "Cable Lightning de 2 metros compatible con carga rápida para iPhone.",
    colors: ["#ffffff"],
    imagesByColor: {
        "#ffffff": ["images/apple/default.png","images/apple/default.png","images/apple/default.png"]
    }
},
{
    id: "a4",
    name: "Cable USB-C a Lightning",
    category: "Cable",
    price: "$12.000",
    image: "images/apple/default.png",
    description: "Cable USB-C a Lightning para dispositivos Apple.",
    colors: ["#ffffff"],
    imagesByColor: {
        "#ffffff": ["images/apple/default.png","images/apple/default.png","images/apple/default.png"]
    }
},
{
    id: "a5",
    name: "Cable Royal USB a Lightning",
    category: "Cable",
    price: "$4.500",
    image: "images/apple/default.png",
    description: "Cable USB a Lightning compatible con iPhone y iPad.",
    colors: ["#ffffff"],
    imagesByColor: {
        "#ffffff": ["images/apple/default.png","images/apple/default.png","images/apple/default.png"]
    }
}
],

kingston: [
{
    id: "k1",
    name: "Pendrive Kingston 64GB",
    category: "Almacenamiento",
    price: "$12.500",
    image: "images/kingston/default.png",
    description: "Pendrive Kingston de 64GB para almacenamiento y transferencia de archivos.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/kingston/default.png","images/kingston/default.png","images/kingston/default.png"]
    }
}
],

sandisk: [
{
    id: "sd1",
    name: "Pendrive Sandisk 128GB",
    category: "Almacenamiento",
    price: "$22.000",
    image: "images/sandisk/default.png",
    description: "Pendrive Sandisk de alta capacidad con 128GB de almacenamiento.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/sandisk/default.png","images/sandisk/default.png","images/sandisk/default.png"]
    }
}
],

accesorios: [
{
    id: "ac1",
    name: "MicroSD Mixor 64GB",
    category: "Almacenamiento",
    price: "$10.500",
    image: "images/accesorios/default.png",
    description: "Tarjeta MicroSD de 64GB para celulares, cámaras y consolas.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
},
{
    id: "ac2",
    name: "Hub USB 3.0 7 Puertos",
    category: "Accesorio",
    price: "$8.500",
    image: "images/accesorios/default.png",
    description: "Hub USB 3.0 con 7 puertos para expandir la conectividad de tu equipo.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
},
{
    id: "ac3",
    name: "Cargador de Auto Kaber",
    category: "Cargador",
    price: "$8.500",
    image: "images/accesorios/default.png",
    description: "Cargador para automóvil compatible con smartphones y dispositivos USB.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
},
{
    id: "ac4",
    name: "Soporte TV Fijo 24 a 42",
    category: "Soporte",
    price: "$5.500",
    image: "images/accesorios/default.png",
    description: "Soporte fijo para televisores de 24 a 42 pulgadas.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
},
{
    id: "ac5",
    name: "Soporte TV Fijo 42 a 60",
    category: "Soporte",
    price: "$8.500",
    image: "images/accesorios/default.png",
    description: "Soporte fijo reforzado para televisores de 42 a 60 pulgadas.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
},
{
    id: "ac6",
    name: "Soporte TV Brazo 14 a 55",
    category: "Soporte",
    price: "$12.500",
    image: "images/accesorios/default.png",
    description: "Soporte articulado con brazo móvil para televisores.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
},
{
    id: "ac7",
    name: "Trípode 1.20m",
    category: "Accesorio",
    price: "$12.000",
    image: "images/accesorios/default.png",
    description: "Trípode ajustable para celulares y cámaras de hasta 1.20 metros.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/accesorios/default.png","images/accesorios/default.png","images/accesorios/default.png"]
    }
}
],


noga: [
{
    id: "n1",
    name: "Mouse Inalámbrico Noga",
    category: "Mouse",
    price: "$6.500",
    image: "images/noga/default.png",
    description: "Mouse inalámbrico compacto ideal para oficina, estudio y uso diario.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n2",
    name: "Mouse Noga Retroiluminado",
    category: "Mouse Gamer",
    price: "$4.500",
    image: "images/noga/default.png",
    description: "Mouse gamer con iluminación LED y diseño ergonómico.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n3",
    name: "Teclado Noga Retroiluminado",
    category: "Teclado",
    price: "$12.500",
    image: "images/noga/default.png",
    description: "Teclado con iluminación LED y distribución completa.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n4",
    name: "Auricular Noga Stormer ST-8620",
    category: "Auricular Gamer",
    price: "$15.000",
    image: "images/noga/default.png",
    description: "Auricular gamer con micrófono y excelente calidad de sonido.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n5",
    name: "Auricular Noga ST-902",
    category: "Auricular Gamer",
    price: "$20.000",
    image: "images/noga/default.png",
    description: "Auricular gamer con sonido envolvente y micrófono integrado.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n6",
    name: "Auricular Noga Combat 7.1",
    category: "Auricular Gamer",
    price: "$28.000",
    image: "images/noga/default.png",
    description: "Auricular gamer con sonido virtual 7.1 para una experiencia inmersiva.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n7",
    name: "Joystick PC Noga",
    category: "Joystick",
    price: "$12.000",
    image: "images/noga/default.png",
    description: "Joystick para PC de uso general con diseño ergonómico.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
},
{
    id: "n8",
    name: "Mousepad Noga 20x23",
    category: "Mousepad",
    price: "$6.000",
    image: "images/noga/default.png",
    description: "Mousepad compacto ideal para escritorio y oficina.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/noga/default.png","images/noga/default.png","images/noga/default.png"]
    }
}
],

gtc: [
{
    id: "g1",
    name: "Mouse GTC Office",
    category: "Mouse",
    price: "$7.500",
    image: "images/gtc/default.png",
    description: "Mouse de oficina cómodo y preciso para uso diario.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/gtc/default.png","images/gtc/default.png","images/gtc/default.png"]
    }
},
{
    id: "g2",
    name: "Mouse GTC Gravity",
    category: "Mouse Gamer",
    price: "$12.000",
    image: "images/gtc/default.png",
    description: "Mouse gamer con iluminación y sensor de alta precisión.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/gtc/default.png","images/gtc/default.png","images/gtc/default.png"]
    }
},
{
    id: "g3",
    name: "Teclado GTC Mecánico",
    category: "Teclado Mecánico",
    price: "$26.000",
    image: "images/gtc/default.png",
    description: "Teclado mecánico robusto con retroiluminación.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/gtc/default.png","images/gtc/default.png","images/gtc/default.png"]
    }
},
{
    id: "g4",
    name: "Parlantes GTC",
    category: "Parlantes",
    price: "$25.000",
    image: "images/gtc/default.png",
    description: "Parlantes estéreo ideales para PC y entretenimiento.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/gtc/default.png","images/gtc/default.png","images/gtc/default.png"]
    }
},
{
    id: "g5",
    name: "Auricular GTC Rising Frost",
    category: "Auricular Gamer",
    price: "$27.000",
    image: "images/gtc/default.png",
    description: "Auricular gamer con diseño moderno y excelente audio.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/gtc/default.png","images/gtc/default.png","images/gtc/default.png"]
    }
},
{
    id: "g6",
    name: "Mousepad GTC 20x23",
    category: "Mousepad",
    price: "$4.500",
    image: "images/gtc/default.png",
    description: "Mousepad compacto para uso diario.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/gtc/default.png","images/gtc/default.png","images/gtc/default.png"]
    }
}
],

genius: [
{
    id: "ge1",
    name: "Mouse Genius NX-7000",
    category: "Mouse Inalámbrico",
    price: "$15.000",
    image: "images/genius/default.png",
    description: "Mouse inalámbrico confiable con gran autonomía.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/genius/default.png","images/genius/default.png","images/genius/default.png"]
    }
},
{
    id: "ge2",
    name: "Parlantes Genius",
    category: "Parlantes",
    price: "$28.000",
    image: "images/genius/default.png",
    description: "Parlantes estéreo para PC con sonido claro y potente.",
    colors: ["#000000"],
    imagesByColor: {
        "#000000": ["images/genius/default.png","images/genius/default.png","images/genius/default.png"]
    }
}
]


    };

    const mainProductsGrid = document.getElementById("main-products-grid");
    const categoryButtons = document.querySelectorAll(".cat-btn");
    const cartCount = document.getElementById("cart-count");

    const detailModal = document.getElementById("product-detail-modal");
    const closeDetailBtn = document.getElementById("close-detail-btn");
    const detailMainImg = document.getElementById("detail-main-img");
    const detailThumbnails = document.getElementById("detail-thumbnails");
    const detailCategory = document.getElementById("detail-category");
    const detailName = document.getElementById("detail-name");
    const detailDescription = document.getElementById("detail-description");
    const detailPrice = document.getElementById("detail-price");
    const detailAddCartBtn = document.getElementById("detail-add-cart-btn");
    const detailColors = document.getElementById("detail-colors");

    const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart-btn");
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartTotalPrice = document.getElementById("cart-total-price");
    const sidebarClearBtn = document.getElementById("sidebar-clear-btn");
    const checkoutBtn = document.getElementById("checkout-btn");

    // MAPEOS DEL FORMULARIO DE DESPACHO
    const checkoutFormOverlay = document.getElementById("checkout-form-overlay");
    const closeFormBtn = document.getElementById("close-form-btn");
    const checkoutForm = document.getElementById("checkout-form");
    const methodDelivery = document.getElementById("method-delivery");
    const typeEnvioBlock = document.getElementById("type-envio-block");
    const typeEnvio = document.getElementById("type-envio");
    const provTucumanBlock = document.getElementById("prov-tucuman-block");
    const nacionalBlock = document.getElementById("nacional-block");
    const paymentBlock = document.getElementById("payment-block");

    let carrito = [];
    let productoActual = null;
    let colorSeleccionado = "";
    function actualizarInterfazCarrito() {
        if(cartCount) cartCount.textContent = carrito.length;
        cartItemsContainer.innerHTML = "";

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío.</p>`;
            cartTotalPrice.textContent = "$0";
            return;
        }

        let precioAcumulado = 0;
        carrito.forEach((item, index) => {
            const precioLimpio = item.price.replace("$", "").replace(/\./g, "");
            precioAcumulado += parseFloat(precioLimpio);

            const itemRow = document.createElement("div");
            itemRow.classList.add("cart-item-row");
            
            let nombreColor = "Negro";
            if (item.colorElegido === "#ffffff") nombreColor = "Blanco";
            if (item.colorElegido === "#ffb6c1") nombreColor = "Rosa";

            itemRow.innerHTML = `
                <div class="cart-item-img-box">
                    <img src="${item.fotoElegida}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-meta">Color: ${nombreColor}</div>
                    <div class="cart-item-price-val">${item.price}</div>
                </div>
                <button class="remove-item-btn" data-index="${index}">&times;</button>
            `;
            
            itemRow.querySelector(".remove-item-btn").addEventListener("click", () => {
                carrito.splice(index, 1);
                actualizarInterfazCarrito();
            });

            cartItemsContainer.appendChild(itemRow);
        });

        cartTotalPrice.textContent = `$${precioAcumulado.toLocaleString('es-AR')}`;
    }

    // PASO 1: AL TOCAR COMPRAR SE ABRE TU DESPACHO INTERACTIVO
    checkoutBtn.addEventListener("click", () => {
        if (carrito.length === 0) return;
        if(cartSidebar) cartSidebar.classList.add("hidden"); 
        if(checkoutFormOverlay) checkoutFormOverlay.classList.remove("hidden"); 
    });

    // PASO 2: CONTROL DE DESPLIEGUES SEGÚN RETIRO O ENVÍOS
    if(methodDelivery) {
        methodDelivery.addEventListener("change", () => {
            const opcion = methodDelivery.value;
            
            if(typeEnvioBlock) typeEnvioBlock.classList.add("hidden-field");
            if(provTucumanBlock) provTucumanBlock.classList.add("hidden-field");
            if(nacionalBlock) nacionalBlock.classList.add("hidden-field");
            
            if (opcion === "showroom") {
                if(paymentBlock) paymentBlock.classList.remove("hidden-field"); 
                if(typeEnvio) typeEnvio.value = ""; 
            } else if (opcion === "envio") {
                if(typeEnvioBlock) typeEnvioBlock.classList.remove("hidden-field"); 
                if(paymentBlock) paymentBlock.classList.remove("hidden-field"); 
            } else {
                if(paymentBlock) paymentBlock.classList.add("hidden-field");
            }
        });
    }

    if(typeEnvio) {
        typeEnvio.addEventListener("change", () => {
            const opcionEnvio = typeEnvio.value;
            if (opcionEnvio === "provincial") {
                if(provTucumanBlock) provTucumanBlock.classList.remove("hidden-field");
                if(nacionalBlock) nacionalBlock.classList.add("hidden-field");
            } else if (opcionEnvio === "nacional") {
                if(nacionalBlock) nacionalBlock.classList.remove("hidden-field");
                if(provTucumanBlock) provTucumanBlock.classList.add("hidden-field");
            } else {
                if(provTucumanBlock) provTucumanBlock.classList.add("hidden-field");
                if(nacionalBlock) nacionalBlock.classList.add("hidden-field");
            }
        });
    }
    // PASO 3: FINALIZAR PEDIDO Y ENVIAR AL WHATSAPP
    if(checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
           e.preventDefault();

const miNumeroTelefono = "5493816867847";

const nombre =
document.getElementById("form-nombre").value;

const metodoEntrega =
methodDelivery.value;

const formaPago =
document.getElementById("form-pago").value;

let datosEntrega = "";

if (metodoEntrega === "showroom") {

  datosEntrega = `📍 Retiro por Showroom`;

} else {

    const tipo = typeEnvio.value;

    if (tipo === "provincial") {

        datosEntrega =
`🚚 Envío Provincial (Tucumán)

📍 Dirección:
${document.getElementById("tuc-direccion").value}

🏙️ Localidad:
${document.getElementById("tuc-localidad").value}

📮 Código Postal:
${document.getElementById("tuc-cp").value}`;

    } else {

        datosEntrega =
`🌎 Envío Nacional

📍 Dirección:
${document.getElementById("nac-direccion").value}

🏙️ Localidad:
${document.getElementById("nac-localidad").value}

🏛️ Provincia:
${document.getElementById("nac-provincia").value}

📮 Código Postal:
${document.getElementById("nac-cp").value}`;

    }
}

const numeroPedido = Math.floor(Math.random() * 90000) + 10000;

let mensaje = `🛒 *PEDIDO #${numeroPedido} - 717 STORE*

📅 Fecha:
${new Date().toLocaleDateString("es-AR")}
━━━━━━━━━━━━━━━

👤 *CLIENTE*
${nombre}

📦 *ENTREGA*
${datosEntrega}

💳 *FORMA DE PAGO*
${formaPago}

━━━━━━━━━━━━━━━

🛍️ *PRODUCTOS*

`;

let total = 0;

carrito.forEach(producto => {

    const precioNumero =
    parseFloat(
        producto.price
            .replace("$","")
            .replace(/\./g,"")
            .replace(",",".")
    );

    total += precioNumero;

    let color = "Negro";

    if(producto.colorElegido === "#ffffff"){
        color = "Blanco";
    }

    mensaje +=
`• ${producto.name} (${color})
${producto.price}

`;
});

mensaje += `
━━━━━━━━━━━━━━━

💰 *TOTAL*
$${total.toLocaleString("es-AR")}

Gracias por tu compra.
Espero confirmación de stock y datos de pago.
`;

console.log(mensaje);
alert(mensaje);
const url =
`https://api.whatsapp.com/send?phone=${miNumeroTelefono}&text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");
});

}

    if(closeFormBtn) closeFormBtn.addEventListener("click", () => checkoutFormOverlay.classList.add("hidden"));
    if(checkoutFormOverlay) checkoutFormOverlay.addEventListener("click", (e) => { if (e.target === checkoutFormOverlay) checkoutFormOverlay.classList.add("hidden"); });

    // ⚡ TUS GALERÍAS ORIGINALES (TAL CUAL COMO ESTABAN ANTES)
    function actualizarGaleriaPorColor(colorHex) {
        const fotosActuales = productoActual.imagesByColor[colorHex];
        if (!fotosActuales || fotosActuales.length === 0) return;
        detailMainImg.src = fotosActuales[0];

        detailThumbnails.innerHTML = "";
        fotosActuales.forEach((imgUrl, index) => {
            const thumbBox = document.createElement("div");
            thumbBox.classList.add("thumb-box");
            if (index === 0) thumbBox.classList.add("active");
            thumbBox.innerHTML = `<img src="${imgUrl}" alt="Vista">`;
            
            thumbBox.addEventListener("click", () => {
                document.querySelectorAll(".thumb-box").forEach(b => b.classList.remove("active"));
                thumbBox.classList.add("active");
                detailMainImg.src = imgUrl;
            });
            detailThumbnails.appendChild(thumbBox);
        });
    }

    function abrirDetalleProducto(producto) {
        productoActual = producto;
        detailCategory.textContent = producto.category;
        detailName.textContent = producto.name;
        detailDescription.textContent = producto.description;
        detailPrice.textContent = producto.price;

        colorSeleccionado = producto.colors[0]; 
        actualizarGaleriaPorColor(colorSeleccionado);

        detailColors.innerHTML = "";
        producto.colors.forEach((hexColor, index) => {
            const dot = document.createElement("div");
            dot.classList.add("color-dot");
            dot.style.backgroundColor = hexColor;
            if (hexColor === "#ffffff") dot.style.border = "1px solid #d1d5db";
            if (index === 0) dot.classList.add("active");

            dot.addEventListener("click", () => {
                document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
                dot.classList.add("active");
                colorSeleccionado = hexColor;
                actualizarGaleriaPorColor(colorSeleccionado);
            });
            detailColors.appendChild(dot);
        });
        detailModal.classList.remove("hidden");
    }

    // ⚡ TU RENDERIZADOR ORIGINAL DE GRILLA
    function mostrarProductosEnGrilla(marcaFiltro) {
        mainProductsGrid.innerHTML = "";
        mainProductsGrid.className = "store-grid-compact"; 
        
        let listaFiltrada = [];
        if (marcaFiltro === "todos") {
            Object.keys(productos).forEach(key => {
                listaFiltrada = listaFiltrada.concat(productos[key]);
            });
        } else {
            listaFiltrada = productos[marcaFiltro] || [];
        }

        listaFiltrada.forEach(prod => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <div class="open-detail-trigger" style="cursor:pointer;">
                    <div class="product-img-container">
                        <img src="${prod.image}" alt="${prod.name}" class="product-img">
                    </div>
                    <div class="product-category">${prod.category}</div>
                    <div class="product-name">${prod.name}</div>
                </div>
                <div class="product-footer">
                    <div class="product-price">${prod.price}</div>
                    <button class="add-card-btn">Sumar al carrito</button>
                </div>
            `;

            card.querySelector(".open-detail-trigger").addEventListener("click", () => abrirDetalleProducto(prod));
            card.querySelector(".add-card-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                carrito.push({ ...prod, colorElegido: prod.colors[0], fotoElegida: prod.image });
                actualizarInterfazCarrito();
            });

            mainProductsGrid.appendChild(card);
        });
    }

    detailAddCartBtn.addEventListener("click", () => {
        if (productoActual) {
            carrito.push({ ...productoActual, colorElegido: colorSeleccionado, fotoElegida: detailMainImg.src });
            actualizarInterfazCarrito();
            detailModal.classList.add("hidden");
            cartSidebar.classList.remove("hidden");
        }
    });

    cartBtn.addEventListener("click", () => cartSidebar.classList.remove("hidden"));
    closeCartBtn.addEventListener("click", () => cartSidebar.classList.add("hidden"));
    closeDetailBtn.addEventListener("click", () => detailModal.classList.add("hidden"));
    sidebarClearBtn.addEventListener("click", () => { carrito = []; actualizarInterfazCarrito(); });
    detailModal.addEventListener("click", (e) => { if (e.target === detailModal) detailModal.classList.add("hidden"); });
    cartSidebar.addEventListener("click", (e) => { if (e.target === cartSidebar) cartSidebar.classList.add("hidden"); });

    categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const marcaSeleccionada = button.getAttribute("data-brand");

        if (marcaSeleccionada) {
            mostrarProductosEnGrilla(marcaSeleccionada);
        }
    });
});


// ==========================
// BUSQUEDA EN VIVO
// ==========================

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {

    const texto = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

        const nombre = card.querySelector(".product-name")
            .textContent
            .toLowerCase();

        const categoria = card.querySelector(".product-category")
            .textContent
            .toLowerCase();

        if (
            nombre.includes(texto) ||
            categoria.includes(texto)
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});

mostrarProductosEnGrilla("todos");
const searchBtn =
document.querySelector(".search-btn");

const searchWrapper =
document.querySelector(".search-wrapper");

if(searchBtn){

    searchBtn.addEventListener("click", () => {

        if(window.innerWidth <= 768){

            searchWrapper.classList.toggle("active");

        }

    });

}
});
