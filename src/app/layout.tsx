import { ApiContextProvider } from "@/context/ContextApi"
import { ModalContextProvider } from "@/context/ModalContext"

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
          <body>{children}</body>
        </ModalContextProvider>
      </ApiContextProvider>
    </html>
  )
}
