import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Search from './components/Search'
import FontSelector from "./components/FontSelector"
import Toggle from "./components/Toggle"
import logo from "./assets/images/logo.svg"
import { FONTS } from './js/fontVariables'

export default function App() {
  const [pageFont, setPageFont] = useState("Sans Serif");

  useEffect(() => {
    document.documentElement.style.setProperty("--ff-current", FONTS[pageFont])
  }, [pageFont])


  return (
    <>
      <header className="primary-header">
        <h1 className="visually-hidden"> dictionary web app </h1>
        
        <img className="primary-header__logo" src={logo} alt="dictionary logo" />

        <div className="primary-header__controls">
          <FontSelector font={pageFont} onFontSelection={setPageFont}/>
          <Toggle />
        </div>
      </header>

      <main>
        <Search />
        <Outlet />
      </main>
    </>
  )
}