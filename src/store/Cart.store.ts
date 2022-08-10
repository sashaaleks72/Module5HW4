import { makeAutoObservable } from "mobx";

export type CartItem = {
    title: string;
    quantity: number;
};

export class Cart {
    cartItems: CartItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(title: string, quantity: number) {
        this.cartItems.push({ title, quantity });
    }

    deleteFromCart(id: number) {
        this.cartItems.splice(id, 1);
    }
}
