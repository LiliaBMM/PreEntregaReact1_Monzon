

function Muestra (props) {
    console.log(props );
    return (
        <section className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-col-4 gap-8" >
            {props.data.length === 0 
            ? <p>cargando...</p>
            : props.data.map ((item, i) => {
                return (
                    <article key = {i} className="card">
                        <h2>{item.nombre}</h2>

                    </article>
                )
            })}
        </section>
    )

}

export default Muestra