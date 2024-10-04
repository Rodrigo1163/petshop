import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="w-full mx-auto my-4 pb-4 border-b-2">
            <div className="flex max-w-7xl justify-between items-center mx-auto">
                <Link to="/" className="font-bold text-xl">PETSHOP</Link>
                <button className="bg-black p-2 rounded-full relative">
                    <FaCartShopping size={24} color="#fff" />
                    <span className="absolute bg-emerald-600 rounded-full px-2 text-white -top-2 -right-2">1</span>
                </button>
            </div>

        </header>
    )
}