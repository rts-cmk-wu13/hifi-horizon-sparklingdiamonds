import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { fetchStatements, fetchProducts } from "../api/authService"; 

export default function Statement() {
  const [statements, setStatements] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [statementsData, productsData] = await Promise.all([
          fetchStatements(),
          fetchProducts()
        ]);
        setStatements(statementsData);
        setProducts(productsData);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    loadData();
  }, []);

  console.log(products);
  

  return (
    <>
      <div className="login__header">
        <Link to="/" className="goback__container">
          <button className="btn_goback btn__signin"><FaArrowLeft /></button>
        </Link>
      </div>

      <h2>Statements</h2>
      <ul>
        {statements.map(item => (
          <li key={item.id}>
            <p>{item.sentence}</p>
          </li>
        ))}
      </ul>

      <h2>Products</h2>
      <section className="products">
        {products.map(item => (
          <div className="product" key={item.id}>
            <img src={item.img} alt={item.name} />
            <p>Item : {item.name}</p>
            <p>Price: {item.price} kr</p>
            <p>Category: {item.category}</p>
            <p>Description: {item.description}</p>
          </div>
        ))}
      </section>

      {error && <div className="error">{error}</div>}
    </>
  );
}
