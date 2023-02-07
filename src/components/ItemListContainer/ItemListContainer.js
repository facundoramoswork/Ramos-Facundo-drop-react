import "./ItemListContainerStyles.css"
export default function ItemListContainer(props){
    return (
        <div className="saludo">
            <h2>Hola mundo {props.greeting}</h2>
        </div>
        
    )
}