export default function BookCard({ image, title, author, published }){
    return(
        <div className="book-card">            
            <img src={image} alt="" className="book-thumbnail"/>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{published}</p>
        </div>
    )
}



