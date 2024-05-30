import './Testimonial.css';

function Testimonial(props) {
    return (
        <article className="testimonial">
            <label className="card-title">Rating: <span className="rating">{props.rating}</span></label>
            <div className="row">
                <img src={props.img} alt="testimonial" />
                <span className="card-title">{props.name}</span>
            </div>
            <span>{props.review}</span>
        </article>
    )
}

export default Testimonial;
