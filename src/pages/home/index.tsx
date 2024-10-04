import { useEffect, useState, useContext } from "react"
import { FaPlus } from "react-icons/fa";
import { CartContext } from '../../contexts/productContext'
import { api } from "../../services/api";


interface ProductProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string
}

export default function Home() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const { addItemCart } = useContext(CartContext)

    useEffect(() => {
        async function getProduct() {
            const response = await api.get("/products");
            setProducts(response.data)
        }
        getProduct()
    }, [])

    function handleAddItemCart(item) {
        addItemCart(item)
    }

    return (
        <div>
            <h1 className="font-bold text-center text-2xl">Pra você</h1>

            <main className="grid grid-cols-5 gap-3 max-w-7xl mx-auto">
                {products.map(product => (
                    <section>
                        <div className="relative">
                            <img
                                className="w-full object-contain"
                                src={product.cover}
                                alt={product.title}
                            />
                            <button
                                className="absolute bg-zinc-700 p-2 rounded-full right-5 bottom-5 hover:scale-125 transition-transform"
                                onClick={() => handleAddItemCart(product)}
                            >
                                <FaPlus color="#fff" size={30} />
                            </button>
                        </div>
                        <p>{product.title}</p>
                        <p>{product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</p>
                    </section>
                ))}
            </main>
        </div>
    )
}