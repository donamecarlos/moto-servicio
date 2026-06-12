const Moto = require("./models/Moto");

async function cargarMotos() {

    try {

        const motos = [

            {
                nombre: "TVS Raider 125",
                marca: "TVS",
                categoria: "Baja",
                cilindraje: 125,
                precio: 2250,
                imagen: "/img/motos/tvs-raider-125.webp",
                descripcion: "Motocicleta económica con diseño moderno y excelente eficiencia de combustible."
            },

            {
                nombre: "Hero Splendor Plus",
                marca: "Hero",
                categoria: "Baja",
                cilindraje: 97,
                precio: 1900,
                imagen: "/img/motos/hero-splendor-plus.webp",
                descripcion: "Modelo confiable y de bajo mantenimiento, ideal para uso diario."
            },

            {
                nombre: "Honda CB500F",
                marca: "Honda",
                categoria: "Media",
                cilindraje: 471,
                precio: 7800,
                imagen: "/img/motos/honda-cb500f.webp",
                descripcion: "Naked versátil con excelente equilibrio entre potencia y comodidad."
            },

            {
                nombre: "Yamaha R3",
                marca: "Yamaha",
                categoria: "Media",
                cilindraje: 321,
                precio: 7500,
                imagen: "/img/motos/yamaha-r3.webp",
                descripcion: "Deportiva ligera con gran maniobrabilidad y diseño agresivo."
            },

            {
                nombre: "BMW M 1000 RR",
                marca: "BMW",
                categoria: "Alta",
                cilindraje: 999,
                precio: 38000,
                imagen: "/img/motos/bmw-m1000rr.webp",
                descripcion: "Superbike premium diseñada para ofrecer el máximo rendimiento en pista y carretera."
            },

            {
                nombre: "Suzuki Hayabusa",
                marca: "Suzuki",
                categoria: "Alta",
                cilindraje: 1340,
                precio: 21000,
                imagen: "/img/motos/suzuki-hayabusa.webp",
                descripcion: "Legendaria motocicleta deportiva conocida por su potencia y estabilidad a alta velocidad."
            }
                            
            

        ];

        await Moto.insertMany(motos);

        console.log("Motos cargadas correctamente");

        process.exit();

    } catch (error) {

        console.error(error);
        process.exit(1);

    }

}

cargarMotos();