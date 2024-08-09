import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Search from './components/Search'
import FontSelector from "./components/FontSelector"
import Toggle from "./components/Toggle"
import logo from "./assets/images/logo.svg"

export default function App() {
  const [pageFont, setPageFont] = useState("Sans Serif");

  return (
    <>
      <header className="primary-header">
        <img className="primary-header__logo" src={logo} alt="dictionary logo" />

        <div className="primary-header__controls">
          <FontSelector font={pageFont} />
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