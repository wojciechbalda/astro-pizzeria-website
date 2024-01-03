import { useStore } from "@nanostores/react"
import { isCartOpen, isAttemptToAddItemToFullCart } from "../store/cartStore"

const Backdrop = () => {
    const $isCartOpen = useStore(isCartOpen)
    const $isAttemptToAddItemToFullCart = useStore(isAttemptToAddItemToFullCart)
    return <>{($isCartOpen || $isAttemptToAddItemToFullCart) && <div className='top-0 left-0 w-screen h-screen bg-black/40 fixed z-50'></div>}</>
}

export default Backdrop;