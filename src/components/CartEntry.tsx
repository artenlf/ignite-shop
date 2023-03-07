import Image from "next/image";
import {
  CartActions,
  CartEntry as ICartEntry
} from "use-shopping-cart/core";

export function CartEntry({
  entry,
  removeItem
}: {
  entry: ICartEntry
  removeItem: CartActions['removeItem']
}) {
  return (
    <div>
      <Image src={entry.imageUrl}
        width={102}
        height={93}
        alt=""
        priority
      />
      <span>{entry.name}</span>
      <strong>
        {entry.formattedValue}
      </strong>
      <button onClick={() => removeItem(entry.id)}>Remover</button>
      {/* <p>
        {entry.quantity} x{' '}
      </p> */}
    </div>
  )
}