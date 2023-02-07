import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"


export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,00</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam non voluptas enim ad sequi sapiente quam ut quis modi reprehenderit doloribus. Voluptas iusto temporibus, sit nam tenetur provident architecto.</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}