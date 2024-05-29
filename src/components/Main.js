import "./Main.css";
import Article from "./Article";
import Testimonial from "./Testimonial";
import dish1 from "../assets/images/greek salad.jpg";
import dish2 from "../assets/images/restauranfood.jpg";
import dish3 from "../assets/images/lemon dessert.jpg";

const articles = [
    {
        title: "Green Salad",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.`,
        img: dish1,
        link: "index.html",
        price: "$12.99"
    },
    {
        title: "Bruchetta",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.`,
        img: dish2,
        link: "index.html",
        price: "$5.99"
    },
    {
        title: "Lemon Dessert",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.`,
        img: dish3,
        link: "index.html",
        price: "$5.00"
    }
]

const testimonials = [
    {
        name: "Name",
        rating: 5,
        review: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.`,
        img: dish1,
    },
    {
        name: "Name",
        rating: 5,
        review: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.`,
        img: dish1
    },
    {
        name: "Name",
        rating: 5,
        review: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.`,
        img: dish1
    },
    {
        name: "Name",
        rating: 5,
        review: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.`,
        img: dish1
    }
]

function Main() {

    return (
    <main className="home">
      <section className="section1">
        <div className="left">
          <h2 className="title display-title">Little Lemon</h2>
          <h6>Chicago</h6>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
          <br />
          <div className="button button-primary">Reserve a Table</div>
        </div>
        <div className="right">
          <img src={dish2} alt="logo" />
        </div>
      </section>
      <section className="section2">
        <div className="header">
          <h2>Specials</h2>
          <div className="button button-primary">Online Menu</div>
        </div>
        {
            articles.map(a =>
                <Article
                    title={a.title}
                    price={a.price}
                    desc={a.desc}
                    link={a.link}
                    img={a.img}
                    key={a.title}
                />
            )
        }
      </section>
      <section className="section3">
        <div className="header">
          <h2>Testimonials</h2>
        </div>
        {
            testimonials.map(t =>
                <Testimonial
                    title={t.name}
                    price={t.rating}
                    desc={t.review}
                    img={t.img}
                    key={t.name}
                />
            )
        }
      </section>
      <section className="section4">
        <div className="left">
          <h2 className="title display-title">Little Lemon</h2>
          <h6>Chicago</h6>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
        <div className="right">
          <img src={dish2} alt="logo" />
        </div>
      </section>
    </main>
  );
}

export default Main;
