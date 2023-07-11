import { StyledHeader } from "@/styles/Header.style";
import logo from "../assets/great-ball-icon.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { SearchContext } from "@/context/SearchContext";
import {FaSearch} from 'react-icons/fa'
import { ApiContext } from "@/context/ContextApi";

export default function Header() {
    const { setSearchedPokemon, takePokemon } = useContext(SearchContext)

    function searchTyping(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchedPokemon(e.target.value)
    }

    return(
        <StyledHeader>
            <div>
                <Image src={logo} alt="Great ball" priority={true} />
                <h1>PokéDex</h1>
            </div>
            <form>
                <input onChange={searchTyping} type="text" placeholder="Search a pokémon..." />
                <button type="submit" onClick={takePokemon}><FaSearch /></button>
            </form>
        </StyledHeader>
    )
}