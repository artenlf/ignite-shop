import Image from "next/image";
import { Minus, Plus } from "phosphor-react";
import { CartActions } from "use-shopping-cart";
import {
  CartEntry as ICartEntry
} from "use-shopping-cart/core";

export function CartEntry({
  entry,
  removeItem,
  incrementItem,
  decrementItem,
}: {
  entry: ICartEntry;
  removeItem: CartActions["removeItem"];
  incrementItem: CartActions["incrementItem"];
  decrementItem: CartActions["decrementItem"];
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
      <div className="controls">
        <button onClick={() => decrementItem(entry.id)}>
          <Minus size={14} weight="bold" className="minus-icon" />
        </button>
        <button onClick={() => incrementItem(entry.id)}>
          <Plus size={14} weight="bold" className="plus-icon" />
        </button>
        <button onClick={() => removeItem(entry.id)}>Remover</button>
      </div>
      {
        <div className="counter">
          {entry.quantity}
        </div>
      }
    </div>
  )
}