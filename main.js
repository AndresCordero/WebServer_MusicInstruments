/* let products = [
    { id: 1, name: "Fender Stratocaster", category: "Guitar", price: 1200, inStock: true },
    { id: 2, name: "Gibson Les Paul", category: "Guitar", price: 1500, inStock: false },
    { id: 3, name: "Yamaha P-125", category: "Digital Piano", price: 650, inStock: true },
    { id: 4, name: "Roland FP-30X", category: "Digital Piano", price: 750, inStock: true },
    { id: 5, name: "Martin D-28", category: "Acoustic Guitar", price: 3000, inStock: true },
    { id: 6, name: "Shure SM58", category: "Microphone", price: 99, inStock: true },
    { id: 7, name: "Audio-Technica AT2020", category: "Microphone", price: 120, inStock: false },
    { id: 8, name: "Pearl Export Drum Set", category: "Drums", price: 800, inStock: true },
    { id: 9, name: "Zildjian A Custom Crash", category: "Cymbals", price: 250, inStock: true },
    { id: 10, name: "Korg Minilogue XD", category: "Synthesizer", price: 699, inStock: true },
    { id: 11, name: "Novation Launchkey 49", category: "MIDI Controller", price: 250, inStock: true },
    { id: 12, name: "Akai MPC One+", category: "Sampler", price: 899, inStock: true },
    { id: 13, name: "Fender Jazz Bass", category: "Bass Guitar", price: 1100, inStock: false },
    { id: 14, name: "Ibanez SR300E", category: "Bass Guitar", price: 350, inStock: true },
    { id: 15, name: "Yamaha YFL-222", category: "Flute", price: 500, inStock: true },
    { id: 16, name: "Buffet Crampon E11", category: "Clarinet", price: 1000, inStock: false },
    { id: 17, name: "Bach TR300H2", category: "Trumpet", price: 800, inStock: true },
    { id: 18, name: "Yamaha YAS-280", category: "Alto Saxophone", price: 1000, inStock: true },
    { id: 19, name: "Casio CT-X700", category: "Keyboard", price: 180, inStock: true },
    { id: 20, name: "Alesis Nitro Mesh Kit", category: "Electronic Drums", price: 400, inStock: true }
]

 */



class Persona {
    constructor(edad, nombre, pais, educacion, deporte) {
        this.edad = edad,
            this.nombre = nombre,
            this.pais = pais,
            this.educacion = educacion,
            this.deporte = deporte
    }
    
}

let Andres = new Persona (31, "Andres", "CR", "Msc", "Hiking")
let Carlos = new Persona (31, "Carlos", "CR", "Msc", "Hiking")
console.log(Andres, Carlos)