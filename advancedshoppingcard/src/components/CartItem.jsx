/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Stack } from "react-bootstrap"
import storeitems from "../data/storeitems.json"
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({id, quantity}) => {
  const {removeFromCart} = useShoppingCart();
  const item = storeitems.find((i)=> i.id === id);
  if (item == null) return null; 
    return (
      <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center"
      >
        <img src={item.imgUrl} alt="cart-image" 
        style={{ width: "125px", height: "75px", objectFit: "cover" }}/>
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>  

      <div>{FormatCurrency(item.price * quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>      
      </Stack>
    )
}

export default CartItem