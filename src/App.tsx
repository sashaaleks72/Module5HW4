import "./App.css";
import UserComponent from "./components/UserComponent/UserComponent";
import ResourceComponent from "./components/ResourceComponent/ResourceComponent";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import { Cart } from "./store/Cart.store";
// import CartComponent from "./components/CartComponent/CartComponent";

export const cart = new Cart();

function App(): JSX.Element {
    return (
        <div className="app-block">
            <div className="app-col">
                <UserComponent></UserComponent>
                <AuthComponent></AuthComponent>
            </div>
            <div className="app-col">
                <ResourceComponent></ResourceComponent>
            </div>
        </div>
    );
}

export default App;

/* 
<div>
                <div>
                    <input
                        type="button"
                        value="iPhone 8, Quantity: 2"
                        onClick={() => cart.addToCart("iPhone 8", 2)}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        value="iPhone 10, Quantity: 1"
                        onClick={() => cart.addToCart("iPhone 10", 1)}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        value="Xiaomi Redmi Note 10 Pro, Quantity: 2"
                        onClick={() =>
                            cart.addToCart("Xiaomi Redmi Note 10 Pro", 2)
                        }
                    />
                </div>
            </div>
            <CartComponent></CartComponent>
*/
