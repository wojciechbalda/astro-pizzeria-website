import { useStore } from '@nanostores/react';
import { isAttemptToAddItemToFullCart } from '../store/cartStore';

const InformationModal = () => {
    const $isAttemptToAddItemToFullCart = useStore(isAttemptToAddItemToFullCart);
    
    return (
        <> 
            {$isAttemptToAddItemToFullCart && ( <>
            <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[60] px-5'>
                <div className='w-full lg:w-2/3 flex flex-col h-5/6 max-w-screen-xl bg-white shadow-sm shadow-black'>
                    <div className='border-b-2 flex justify-between items-center px-7 text-2xl'>
                        <p className=' font-bold '><span className='z-10 bg-white h-full inline-block'>Information</span></p>
                        <button className='py-7' onClick={() => isAttemptToAddItemToFullCart.set(false)}>&#10005;</button>
                    </div>
                    <div className='px-7 overflow-auto grow'>
                        <p className='text-center p-8'>You cannot add more than 30 items</p>
                    </div>
                </div>
            </div>
            </>)}
        </>
    )
}

export default InformationModal