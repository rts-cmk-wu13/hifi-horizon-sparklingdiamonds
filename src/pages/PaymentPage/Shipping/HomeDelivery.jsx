import { useState } from "react";

export default function HomeDelivery() {
  const paymentInfo = JSON.parse(sessionStorage.getItem("paymentInfo") || "null");
  const [info] = useState(paymentInfo); // you don't need setInfo if you're not updating it

  return (
    <div className="home__shipping">
      <h4 className="shipping__title">Your order will be shipped to</h4>

      {info ? (
        <>
          <p>{info.address}</p>
          <p>{info.city}</p>
          <p>{info.zip}</p>
          <p>{info.country}</p>
        </>
      ) : (
        <p>No address registered</p>
      )}
    </div>
  );
}
