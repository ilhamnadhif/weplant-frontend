import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.id;

  const [select, setSelect] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.weplant-backend.my.id/api/v1/products/${id}`)
      .then((data) => {
        setProduct(data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  if (product.id) {
    return (
      <>
        <div className="main-wrapper">
          <div className="container">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <div>
                    {select == "" ? (
                      <img src={product.main_image.url} />
                    ) : (
                      <img src={select} />
                    )}
                  </div>
                </div>
                <div className="hover-container">
                  <div>
                    <a onClick={() => setSelect("")}>
                      <img src={product.main_image.url} alt="watch" />
                    </a>
                  </div>
                  {product.images &&
                    product.images.map((i) => {
                      return (
                        <div>
                          <a onClick={() => setSelect(i.url)}>
                            <img src={i.url} />
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="product-div-right">
                <h1 className="product-name">{product.name}</h1>
                <h2 className="product-price">IDR {product.price}</h2>
                <h2 className="product-stock">
                  Stock :<span> {product.stock} </span>
                </h2>

                <p className="product-description">{product.description}</p>
                <div className="btn-groups">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tencent.ig"
                    className="buy-now-btn"
                  >
                    <i className="fas fa-wallet"></i>buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <h1>Loading....</h1>;
}
