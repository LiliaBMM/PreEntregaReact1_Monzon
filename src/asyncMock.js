const produto = [
    {
        id:'1',
        nombre:'Beauty Color Vision',
        precio:23,
        categoria:'maquillaje',
        img:'./imagenes/beautycolorvision.PNG',
        stock: 10,
        descripcion:'Sombra de ojos',
    },
    {
        id:'2',
        nombre:'Blush',
        precio: 26,
        categoria:'maquillaje',
        img:'./imagenes/blush.PNG',
        stock: 18,
        descripcion:'Rubor',
    }
]

export const getProducto = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(produto)
        },200)
    })
}

export const getProductById = (produtoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(produto.find(prod => prod.id === produtoId))
        },200)
    })
}