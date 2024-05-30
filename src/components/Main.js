import "./Main.css";
import Article from "./Article";
import Testimonial from "./Testimonial";

import dish1_img from "../assets/images/greek salad.jpg";
import dish2_img from "../assets/images/restauranfood.jpg";
import dish3_img from "../assets/images/lemon dessert.jpg";
import testimonial_img from "../assets/images/Mario and Adrian b.jpg";
import chef_img from "../assets/images/restaurant chef B.jpg";
import restaurant_img from "../assets/images/restaurant.jpg";

const articles = [
    {
        title: "Green Salad",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.`,
        img: dish1_img,
        link: "index.html",
        price: "$12.99"
    },
    {
        title: "Bruchetta",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.`,
        img: dish2_img,
        link: "index.html",
        price: "$5.99"
    },
    {
        title: "Lemon Dessert",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.`,
        img: dish3_img,
        link: "index.html",
        price: "$5.00"
    }
]

const testimonials = [
    {
        name: "Mario",
        rating: 5,
        review: `Lorem Ipsum is simply dummy text.`,
        img: testimonial_img,
    },
    {
        name: "Adrian",
        rating: 4,
        review: `Lorem Ipsum is simply dummy text.`,
        img: testimonial_img
    },
    {
        name: "Tony",
        rating: 5,
        review: `Lorem Ipsum is simply dummy text.`,
        img: testimonial_img
    },
    {
        name: "Jasmine",
        rating: 3,
        review: `Lorem Ipsum is simply dummy text.`,
        img: testimonial_img
    }
]

function Main() {

    return (
    <main className="home">
      <section className="section1">
        <div className="left">
          <label className="title display-title">Little Lemon</label>
          <label className="sub-title">Chicago</label>
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
          <img src={dish2_img} alt="logo" />
        </div>
      </section>
      <section className="section2">
        <div className="header">
          <label className="sub-title">Specials</label>
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
          <label className="sub-title">Testimonials</label>
        </div>
        <div className="cards">
        {
            testimonials.map(t =>
                <Testimonial
                    name={t.name}
                    rating={t.rating}
                    review={t.review}
                    img={t.img}
                    key={t.name}
                />
            )
        }
        </div>
      </section>
      <section className="section4">
        <div className="left">
          <label className="title display-title">Little Lemon</label>
          <label className="sub-title">Chicago</label>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
        <div className="right">
          <img src={restaurant_img} alt="restaurant" />
          <img src={chef_img} alt="chef" />
        </div>
      </section>
    </main>
  );
}

export default Main;
