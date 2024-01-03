import { isCartOpen, cartItems, getCurrentAmountOfCartItems } from '../store/cartStore';
import { useStore } from '@nanostores/react';

type CartProps = {
    children: any;
}

const Cart = (props: any) =>
{
    const $isCartOpen = useStore(isCartOpen);
    const $cartItems = useStore(cartItems); //it's required for rerender
    const orderSize = getCurrentAmountOfCartItems();
    
    return (
        <button className="pl-3 py-4" onClick={() => isCartOpen.set(!$isCartOpen)}>
            <div className="relative">
                {props.children}
                {orderSize !== 0 && <div className="absolute animate-ping -bottom-2 -right-3 aspect-square w-4 text-xs flex items-center justify-center rounded-full bg-orange-900 text-white">{orderSize}</div>}
            </div>
        </button>
    )
}

export default Cart