const productos = [
    {
        id: '01',
        name: 'Random 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
        stock: 10,
        price: 25000,
        category: 'Nuevos',
        img: 'https://picsum.photos/150/150?random=1'
    },
    {
        id: '02',
        name: 'Random 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
        stock: 20,
        price: 35000,
        category: 'Nuevos',
        img: 'https://picsum.photos/150/150?random=2'
    },
    {
        id: '03',
        name: 'Random 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
        stock: 30,
        price: 45000,
        category: 'Nuevos',
        img: 'https://picsum.photos/150/150?random=3'
    },
    {
        id: '04',
        name: 'Random 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
        stock: 40,
        price: 55000,
        category: 'Nuevos',
        img: 'https://picsum.photos/150/150?random=4'
    },
    // Productos en Ofertas
    {
        id: '05',
        name: 'Oferta 1',
        description: 'Producto en oferta especial',
        stock: 5,
        price: 15000,
        category: 'Ofertas',
        img: 'https://picsum.photos/150/150?random=5'
    },
    {
        id: '06',
        name: 'Oferta 2',
        description: 'Descuento por tiempo limitado',
        stock: 8,
        price: 22000,
        category: 'Ofertas',
        img: 'https://picsum.photos/150/150?random=6'
    },
    // Productos en Más Vendidos
    {
        id: '07',
        name: 'Popular 1',
        description: 'El más vendido de la semana',
        stock: 2,
        price: 75000,
        category: 'Mas Vendidos',
        img: 'https://picsum.photos/150/150?random=7'
    },
    {
        id: '08',
        name: 'Popular 2',
        description: 'Recomendado por nuestros clientes',
        stock: 3,
        price: 89000,
        category: 'Mas Vendidos',
        img: 'https://picsum.photos/150/150?random=8'
    },
]

let error = false

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Error al cargar los productos')
            }
            else {
                resolve(productos)
            }
        }, 3000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Error al cargar los productos')
            }
            else {
                // resolve(productos)
                let prod = productos.find((prd) => prd.id === id)
                resolve(prod)
            }
        }, 3000)
    })
}   