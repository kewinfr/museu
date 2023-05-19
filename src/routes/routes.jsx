import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home'

export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' index element={<Home />}/>
                <Route path='exploracao'element={<p>exploracao</p>}/>
                <Route path='pesquisa'element={<p> pesquisa</p>}/>
                <Route path='acervo'element={<p>acervo</p>}/>
                <Route path='videos'element={<p>videos</p>}/>
                <Route path='fotos'element={<p>fotos</p>}/>
                
                <Route path='contatos'element={<p>contatos</p>}/>
                
                
                
                <Route path='*'element={<p>error 404</p>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
