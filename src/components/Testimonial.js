import './Testimonial.css';

function Testimonial(props) {
    return (
        <article className="testimonial">
            <img src={props.img} alt="article" />
            <div className="header">
                <span className="card-title">{props.title}</span>
                <span className="card-title price">{props.price}</span>
            </div>
            <span>{props.desc}</span>
            <br />
            <a href={props.link}>Order a delivery</a>
        </article>
    )
}

export default Testimonial;