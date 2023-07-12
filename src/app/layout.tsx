import { ApiContextProvider } from "@/context/ContextApi"
import { ModalContextProvider } from "@/context/ModalContext"
import { SearchContextProvider } from "@/context/SearchContext"
import StyledComponentsRegistry from "../../regitry"

export const metadata = {
  title: 'Pokédex',
  description: 'Pokédex developed by Paulo Turino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ApiContextProvider>
        <ModalContextProvider>
          <SearchContextProvider>
            <body>
              <StyledComponentsRegistry>
                {children}
              </StyledComponentsRegistry>
            </body>
          </SearchContextProvider>
        </ModalContextProvider>
      </ApiContextProvider>
    </html>
  )
}
