import Item from "./Item"

const ItemLists = ({producto}) => {
    return (
        <div>
            {producto.map(item => <Item key = {item.id} {...item}/>)}
        </div>
    )
}

export default ItemLists