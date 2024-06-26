import './Article.css';

function Article(props) {
    return (
        <article className="special">
            <img src={props.img} alt="article" />
            <div className="body">
                <div className="header">
                    <span className="card-title">{props.title}</span>
                    <span className="card-title price">{props.price}</span>
                </div>
                <div className="desc">{props.desc}</div>
                <br />
                <a href={props.link}>Order a delivery</a>
            </div>
        </article>
    )
}

export default Article;