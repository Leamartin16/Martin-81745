const productos=[
    {
    id:'01',
    name:'Random 1',
    descriotion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
    stock:10,
    price:25000,
    category:'Nuevos',
    img:'https://via.placeholder.com/150'
    },

    {
    id:'02',
    name:'Random 2',
    descriotion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
    stock:20,
    price:35000,
    category:'Nuevos',
    img:'https://via.placeholder.com/150'
    },

    {
    id:'03',
    name:'Random 3',
    descriotion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
    stock:30,
    price:45000,
    category:'Nuevos',
    img:'https://via.placeholder.com/150'
    },

    {
    id:'04',
    name:'Random 4',
    descriotion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
    stock:40,
    price:55000,
    category:'Nuevos',
    img:'https://via.placeholder.com/150'
    },
]

let error= false

export const getProductos = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Error al cargar los productos')                
            }
            else{
                resolve(productos)
            }
        },3000)
    })
}   