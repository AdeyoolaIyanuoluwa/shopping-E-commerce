import { useContext } from "react";
import SecondaryButton from "../../components/Button/secondary";
import { CartContext } from "../../container/cartContext";
import { ProductData } from "../../Mockdata/productData";

const EachProduct = ({ product, index }) => {
  const { addToCart } = useContext(CartContext);

  const addtocart = () => {
    addToCart(product);

    // ++product.quantity
    //     {...products, quantity: product.quantity + 1, updatedAmount: product.amount * (product.quantity + 1)})
    // // console.log(product.amount, product.quantity);
    //     ProductData[index].quantity = product.quantity + 1

    //     ProductData[index].updatedAmount = product.amount * product.quantity
  };
  return (
    <div>
      <div className="products">
        <div className="product-image">
          <img className="images" src={product.imageUrl} alt="" />
        </div>

        <div className="text-div">
          <div>
            <p className="product-name">{product.productName}</p>
          </div>
          <div className="addtocart">
            <span className="product-amount">${product.amount}</span>

            <div>
              <SecondaryButton
                addtocart={addtocart}
                parent={`Add to Cart ${product.quantity}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
