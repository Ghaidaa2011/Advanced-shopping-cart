/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap"
import FormatCurrency from "./FormatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({id, name, price, imgUrl}) => {
    const {getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemsQuantity(id);
    return (
        <Card className="h-100"> 
            <Card.Img
            variant="top"
            src={imgUrl}
            style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity===0 ? 
                    (<Button className="w-100" onClick={()=>increaseCartQuantity(id)}>Add to cart</Button>)  :
                    (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: "0.5rem" }}
                            >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: "0.5rem" }}
                            >
                                <Button size="sm" onClick={()=>decreaseCartQuantity(id)}>-</Button>
                                <div>
                                <span className="fs-3">{quantity} in cart</span>
                                </div>
                                <Button size="sm" onClick={()=>increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={()=>removeFromCart(id)}
                            >
                                Remove
                            </Button>
                            </div>
                    )
                }
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem