import { addCartItem, removeCartItem } from "../store/cartStore"

type PartOfOrder = {
    image: string,
    name: string,
    price: number,
    quantity: number,
}

function PartOfOrder({image, name, price, quantity} : PartOfOrder)
{
    return (
        <li className='flex flex-wrap gap-4 py-4 justify-center md:justify-normal items-center'>
            <div className='aspect-square w-1/4'>
                <img className='w-full h-full' src={image} alt={name} width="300" />
            </div>
            <div>
                <h3 className="font-bold">{name}</h3>
                <p>Price: {price} zł</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className="w-full md:w-1/6">
                <div className='mx-auto grid grid-cols-3 w-1/2 sm:w-1/4 md:w-full'>
                    <button onClick={() => removeCartItem(name, 1)} className="bg-orange-800 text-white text-lg aspect-square">-</button>
                    <input type='text' disabled={true} value={quantity} className='bg-slate-100 aspect-square text-center'/>
                    <button onClick={() => addCartItem({name, image, price})} className="bg-orange-800 text-white text-lg aspect-square">+</button>
                </div>
            </div>
        </li>
    ) 
    
}

export default PartOfOrder