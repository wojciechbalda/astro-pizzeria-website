import { useStore } from '@nanostores/react';
import { isCartOpen, cartItems } from '../store/cartStore';
import PartOfOrder from './PartOfOrder';

const CartModal = () => {
    const $isCartOpen = useStore(isCartOpen);
    const $cartItems = useStore(cartItems);
    let totalPrice = 0;
    const isCartEmpty = Object.values($cartItems).length === 0

    return (
        <> 
            {$isCartOpen && ( <>
            <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 px-5'>
                <div className='w-full lg:w-2/3 flex flex-col h-5/6 max-w-screen-xl bg-white shadow-sm shadow-black'>
                    <div className='border-b-2 flex justify-between items-center px-5 text-2xl'>
                        <p className=' font-bold '><span className='z-10 bg-white h-full inline-block'>Your order</span></p>
                        <button className='py-7' onClick={() => isCartOpen.set(!$isCartOpen)}>&#10005;</button>
                    </div>
                    <div className='px-5 overflow-auto grow'>
                        {Object.values($cartItems).length !== 0 && (
                        <ul>
                            {Object.values($cartItems).map((cartItem)=> { totalPrice+=cartItem.price*cartItem.quantity; return (
                                <PartOfOrder {...cartItem} />
                            )})}
                        </ul> )}
                        {isCartEmpty && <><p className='text-center p-8'>The cart is empty</p></>}
                    </div>
                    {!isCartEmpty && (<div className='border-t-2 px-5 py-4 flex items-center justify-between'>
                        <p className='w-1/2 md:w-auto'>Total: {totalPrice.toFixed(2)}zł</p>
                        <button onClick={() => window.location.href = window.location.href} className='w-1/2 md:w-auto bg-orange-800 py-4 px-5 text-white'>Continue (The website will refresh)</button>
                    </div>
                    )}
                </div>
            </div>
            </>)}
        </>
    )
}

export default CartModal