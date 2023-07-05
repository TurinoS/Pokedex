import { ApiContextProvider } from "@/context/ContextApi"

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
        <body>{children}</body>
      </ApiContextProvider>
    </html>
  )
}
