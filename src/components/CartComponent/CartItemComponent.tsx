import { observer } from "mobx-react-lite";
import { cart } from "../../App";

type Props = {
    id: number;
    title: string;
    quantity: number;
};

const CartItemComponent = observer((props: Props) => {
    return (
        <div>
            <div>ID: {props.id + 1} </div>
            <div>Title: {props.title}</div>
            <div>Quantity: {props.quantity}</div>
            <input
                type="button"
                value="Delete item"
                onClick={() => cart.deleteFromCart(props.id)}
            />
        </div>
    );
});

export default CartItemComponent;
