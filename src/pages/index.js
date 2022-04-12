import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import logogoogle from "../assets/logo/googlelogo.png";
import logoapple from "../assets/logo/applelogo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.weplant-backend.my.id/api/v1/products/?perPage=100")
      .then((data) => {
        setProduct(data.data.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <section className="home" id="home">
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <h3>There's a Plant for Everyone</h3>
                <p>
                  WePlant menyediakan berbagai tanaman indoor maupun outdoor
                  yang lengkap, berkualitas dan berharga terjangkau.
                </p>
                <a href="#about" className="btn">
                  About Us
                </a>
              </div>
              <div className="image">
                <img src={bg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <h3 className="sub-heading">our menu</h3>
        <h1 className="heading">today's speciality</h1>

        <div className="box-container">
          {products &&
            products.map((p) => {
              return (
                <CardProduct
                  key={p.id}
                  image={p.main_image.url}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  id={p.id}
                />
              );
            })}
        </div>
      </section>

      <section className="about" id="about">
        <h3 className="sub-heading">about us</h3>
        <h1 className="heading">why choose us?</h1>

        <div className="row">
          <div className="image">
            <img src={bg2} alt="" />
          </div>

          <div className="content">
            <h3>Segarkan Rumahmu dengan tanaman</h3>
            <p>
              Dalam aplikasi We Plant anda dapat bertransaksi dengan mudah dan
              berkesempatan mendapatkan diskon ataupun cashback yang menarik.
              Download aplikasi We Plant Di Playstore sekarang juga.
            </p>
            <div className="icons-container">
              <div className="icons">
                <Link
                  to={
                    "https://drive.google.com/file/d/1uBWw01XoGdy2_FD16D5XTaq4uYqUGyKl/view?usp=drivesdk"
                  }
                >
                  <img src={logoapple} alt="image" />
                </Link>
              </div>
              <div className="icons">
                <Link
                  to={
                    "https://drive.google.com/file/d/1uBWw01XoGdy2_FD16D5XTaq4uYqUGyKl/view?usp=drivesdk"
                  }
                >
                  <img src={logogoogle} alt="image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
