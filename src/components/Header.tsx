import { MoonIcon, StyledHeader, SunIcon } from "@/styles/Header.style";
import Switch from "react-switch";

export default function Header() {
    return(
        <StyledHeader>
            <h1>PokéDex</h1>
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