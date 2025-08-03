import Link from "next/link"
import { FC } from "react"
import { MdOutlineStore } from "react-icons/md"
import SearchForm from "./search-form"
import { RiFileList3Line } from "react-icons/ri"
import { FaShoppingCart } from "react-icons/fa"

const Header: FC = () => {
    return (
        <div className="flex bg-white justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
            <Link href="/" className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center  gap-2">
                <MdOutlineStore />
                <span>Manav </span>
            </Link>

            <SearchForm />
            <div className="flex items-center gap-5">
                <Link href="/orders" className="text-lg relative text-gray-700 hover:text-green-600 transition-colors
                 flex items-center gap-2">
                    <RiFileList3Line className="text-2xl" />
                    <span className="max-md:hidden">Siparişlerim</span>
                </Link>

                <Link href="/cart" className="text-lg relative text-gray-700 hover:text-green-600 transition-colors
                 flex items-center gap-2">

                    <div className="relative ">
                        <FaShoppingCart className="text-2xl" />
                        <span className="absolute shadow-sm font-bold right-[-20px] text-sm top-[-20px] bg-green-500 text-white
                        rounded-full size-6 grid place-items-center">0</span>
                    </div>
                    <span className="max-md:hidden">Sepetim</span>
                </Link>
            </div>
        </div>
    )
}

export default Header