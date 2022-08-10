import { observer } from "mobx-react-lite";
import { cart } from "../../App";
import CartItemComponent from "./CartItemComponent";

const CartComponent = observer(() => {
    return (
        <div className="cart-container">
            {cart.cartItems.map((item, index) => (
                <CartItemComponent
                    key={index}
                    id={index}
                    title={item.title}
                    quantity={item.quantity}
                ></CartItemComponent>
            ))}
        </div>
    );
});

export default CartComponent;
