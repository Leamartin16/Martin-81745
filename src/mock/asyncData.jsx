export const productos= [
    // {
    //     id: '01',
    //     name: 'Random 1',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
    //     stock: 10,
    //     price: 25000,
    //     category: 'Nuevos',
    //     img: 'https://picsum.photos/150/150?random=1'
    // },
    {
        // id: '02',
        name: 'Aviador Gradient',
        description: 'Lentes degradé con protección UV, montura de metal liviano.',
        stock: 8,
        price: 195000,
        category: 'Nuevos',
        img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=300',
        modelo: 'RB3026',
        color: 'Plateado/Lente azul'
    },
    {
        // id: '03',
        name: 'Aviador Mirror',
        description: 'Efecto espejo, ideal para deportes y actividades al aire libre.',
        stock: 5,
        price: 210000,
        category: 'Nuevos',
        img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
        modelo: 'RB3025',
        color: 'Negro/Lente plateado'
    },
    {
        // id: '04',
        name: 'Wayfarer Classic',
        description: 'El estilo que definió una generación. Montura de acetato negro.',
        stock: 15,
        price: 165000,
        category: 'Nuevos',
        img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=300',
        modelo: 'RB2140',
        color: 'Negro'
    },
    // Productos en Ofertas
    {
        // id: '05',
        name: 'Wayfarer Tortoise',
        description: 'Estilo carey, moderno y versátil para cualquier ocasión.',
        stock: 7,
        price: 175000,
        category: 'Ofertas',
        img: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=300',
        modelo: 'RB2140',
        color: 'Carey'
    },
    {
        // id: '06',
        name: 'Wayfarer Polarized',
        description: 'Lentes polarizados, ideales para conducir y reducir reflejos.',
        stock: 4,
        price: 225000,
        category: 'Ofertas',
        img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
        modelo: 'RB2140P',
        color: 'Negro mate'
    },
    // Productos en Más Vendidos
    {
        // id: '07',
        name: 'Clubmaster Classic',
        description: 'Diseño retro de los 50s, combinación de metal y acetato.',
        stock: 6,
        price: 190000,
        category: 'Mas Vendidos',
        img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300',
        modelo: 'RB3016',
        color: 'Negro/Dorado'
    },
    {
        // id: '08',
        name: 'Clubmaster Folding',
        description: 'Edición especial plegable, fácil de transportar.',
        stock: 3,
        price: 245000,
        category: 'Mas Vendidos',
        img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300',
        modelo: 'RB3016F',
        color: 'Carey/Dorado'
    },
]

let error= false

export const getProducts = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        },3000)
    })
}
export const getOneProduct = (id)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                let prod= productos.find((prd)=> prd.id === id)
                resolve(prod)
            }
        },3000)
    })
}