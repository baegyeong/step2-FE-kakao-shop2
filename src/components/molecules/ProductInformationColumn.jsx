import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styled from "styled-components";

const ProductInfoColumn = styled.div`
  display: flex;
  width: 50rem;
  margin-right: 1rem;
`;

const ProductColumn = styled.div`
  font-size: 1.4rem;
  margin-left: 2rem;

  .price {
    font-weight: bold;
  }
`;

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  const imagePath = `${staticServerUri}${image}`;

  return (
    <ProductInfoColumn className="product-information-column">
      <div className="col">
        <Photo src={`${imagePath}`} alt={productName} />
      </div>
      <ProductColumn className="col">
        <p className="name">{productName}</p>
        <p className="price">{comma(price)}원</p>
      </ProductColumn>
    </ProductInfoColumn>
  );
};

export default ProductInformationColumn;
