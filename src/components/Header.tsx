import { MoonIcon, StyledHeader, SunIcon } from "@/styles/Header.style";
import Switch from "react-switch";
import logo from "../assets/great-ball-icon.png";
import Image from "next/image";

export default function Header() {
    return(
        <StyledHeader>
            <div>
                <Image src={logo} alt="Great ball" priority={true} />
                <h1>PokéDex</h1>
            </div>
            <input type="text" placeholder="Que pokémon você busca?" />
            <Switch
                onChange={() => {}}
                checked={true}
                checkedIcon={<MoonIcon />}
                uncheckedIcon={<SunIcon />}
                offColor="#010446"
                onColor="#010446"
            />
        </StyledHeader>
    )
}