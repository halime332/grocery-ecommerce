"use client";

import { CiSearch } from "react-icons/ci";
import { FC } from "react";

const SearchForm: FC = () => {
    return (
        <form onSubmit={() => { }} className="flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2 ">
            <button className="text-zinc-700 text-xl">
                <CiSearch />
            </button>
            <input type="text" placeholder="Bir ürün ve kategori arayın"
                className="outline-none text-zinc-800 w-full" />
        </form>
    )
}

export default SearchForm