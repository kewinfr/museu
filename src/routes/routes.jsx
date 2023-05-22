import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home'
import Videos from '../pages/Videos'
import Exposições from '../pages/exposicao'
import Fotos from '../pages/Fotos'
import Contatos from '../pages/Contatos'

export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' index element={<Home />}/>
                <Route path='exploracao'element={<Exposições/>}/>
                <Route path='pesquisa'element={<p> pesquisa</p>}/>
                <Route path='acervo'element={<p>acervo</p>}/>
                <Route path='videos'element={<Videos/>}/>
                <Route path='fotos'element={<Fotos/>}/>
                
                <Route path='contatos'element={<Contatos/>}/>
                
                
                
                <Route path='*'element={<p>error 404</p>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
