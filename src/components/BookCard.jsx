export default function BookCard({ image, title, author, published }){
    return(
        <>
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{published}</p>
        </>
    )
}