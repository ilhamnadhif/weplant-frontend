import { Link } from "react-router-dom";

export default function CardProduct(props) {
  // return <div>
  //     <Image src={props.image}  width={100} height={100} />
  //     <h3>{props.name}</h3>
  // </div>;
  return (
    <div className="box">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Link to={`/${props.id}`}>
          <a className="btn">Detail</a>
        </Link>
        <span className="price">IDR {props.price}</span>
      </div>
    </div>
  );
}
