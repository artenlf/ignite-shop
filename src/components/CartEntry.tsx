import Image from "next/image";
import {
  CartActions,
  CartEntry as ICartEntry
} from "use-shopping-cart/core";

export function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry
  removeItem: CartActions['removeItem']
}) {

  const entryPriceFormattedToPtBr = entry.formattedValue.
    replace('.', ',',).
    replace('R$', 'R$ ')

  return (
    <div className="product__grid">
      <Image src={entry.imageUrl}
        width={102}
        height={93}
        alt=""
        priority
      />
      <span>{entry.name}</span>
      <strong>
        {entryPriceFormattedToPtBr}
      </strong>
      <button onClick={() => removeItem(entry.id)}>Remover</button>
      {
        <div className="counter">
          {entry.quantity}
        </div>
      }
    </div>
  )
}