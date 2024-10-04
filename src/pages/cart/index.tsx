import { useContext } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from '../../contexts/productContext'
export default function Cart() {
    const { cart } = useContext(CartContext)

    return (
        <div className="w-full max-w-7xl mx-auto space-y-3">

            {cart.length === 0 && (
                <p className="text-center font-bold">Ops!! Escolha produtos para seu carrinho</p>
            )}

            {cart.length > 0 && (
                <>
                    {cart.map(item => (
                        <section className="flex flex-col sm:flex-row justify-between items-center border-b-2">
                            <img
                                src={item.cover}
                                alt={item.title}
                                className="w-28"
                            />
                            <div>
                                <p>{item.title} - <span className="font-bold">{item.price}</span></p>
                            </div>
                            <div>
                                <button>
                                    <FaPlus />
                                </button>
                                {item.amount}
                                <button>
                                    <FaMinus />
                                </button>
                            </div>

                            <div className="font-bold">
                                <span>Total</span>
                                <p>{1000}</p>
                            </div>
                        </section>
                    ))}
                </>
            )}
        </div>
    )
}