import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function NavDaPagina({children}) {
    let location=useLocation();

    return (
        <nav className="header__nav">
            <Link to="/" className={location.pathname === "/" ? "link__atual" : "link"}>home</Link>
            <Link to="exploracao" className={location.pathname === "/exploracao" ? "link__atual" : "link"}>Exposições</Link>
            <Link to="pesquisa" className={location.pathname === "/pesquisa" ? "link__atual" : "link"}>pesquisa</Link>
            <Link to="acervo" className={location.pathname === "/acervo" ? "link__atual" : "link"}>acervo</Link>
            <Link to="videos" className={location.pathname === "/videos" ? "link__atual" : "link"}>videos</Link>
            <Link to="fotos" className={location.pathname === "/fotos" ? "link__atual" : "link"}>fotos</Link>
            <Link to="contatos" className={location.pathname === "/contatos" ? "link__atual" : "link"}>contatos</Link>
            {children}
        </nav>
    )
}
