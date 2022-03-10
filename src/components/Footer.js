import logo from "../assets/logo/logo.png"

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <img
            className="imagefooter"
            style={{ width: "100%" }}
            src={logo}
            alt="image"
          />
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">product</a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">+62 873573746314</a>
          <a href="#">aqila@gmail.com</a>
          <a href="#">kudus, indonesia</a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="https://facebook.com">facebook</a>
          <a href="https://twitter.com">twitter</a>
          <a href="https://instagram.com">instagram</a>
          <a href="https://linkedin.com">linkedin</a>
        </div>
      </div>

      <div className="credit">
        copyright @ 2021 by <span>mr. web designer</span>
      </div>
    </section>
  );
}
