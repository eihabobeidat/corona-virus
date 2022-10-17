import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  //const {id} = this.props.value.matches[0].params
  let params = useParams();
  let to = useNavigate();

  const handleSave = () => {
    console.log(to('/products'))
  }

  return (
    <div>
      <h1>Product Details - {params.id}</h1>
      <h6>The id above taken from the route params</h6>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ProductDetails;
