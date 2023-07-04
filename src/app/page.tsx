'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/GlobalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        Hello WORLD!
      </main>
      <Footer />
    </>
  )
}
