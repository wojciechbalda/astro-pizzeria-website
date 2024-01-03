import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);
export const isAttemptToAddItemToFullCart = atom(false);

export type CartItem = {
  name: string;
  price: number,
  image: string;
  quantity: number;
}


export const cartItems = map<Record<string, CartItem>>({});

type ItemDisplayInfo = Pick<CartItem,  'name' | 'image' | 'price'>;

export function getCurrentAmountOfCartItems()
{
  const exisitingEntry = cartItems.get();
  return Object.values(exisitingEntry).reduce((acc, productType) => acc + productType.quantity, 0)
}

export function addCartItem({ name, image, price }: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[name];
  const amountOfItems = getCurrentAmountOfCartItems();
  if (amountOfItems === 30)
  {
    isAttemptToAddItemToFullCart.set(true);
    return;
  }
  if (existingEntry) {
    cartItems.setKey(name, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    });
  } else {
    cartItems.setKey(
      name,
      { name, image, price, quantity: 1 }
    );
  }
}

export function removeCartItem(name: string, amount: number)
{
  const existingEntry = cartItems.get()[name];
  if (existingEntry.quantity - amount === 0) {
    //@ts-expect-error
    cartItems.setKey(name, undefined);
  } else {
    cartItems.setKey(name, {
      ...existingEntry,
      quantity: existingEntry.quantity - amount,
    });
  }
}
