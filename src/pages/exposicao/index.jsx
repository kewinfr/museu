import React from 'react'
import './css/exposicoes.css'
import arqueologia from './img/arqueologia.jpg'
import antropologia from './img/antropologia.jpg'
import etnologia from './img/etnologia.jpg'
import geologia from './img/geologia.jpg'
import NavDaPagina from '../../components/NavDaPagina'
export default function Exposições() {
    return (
        <>
            <main className='main__exposicao'>

                <div className="Exposicao__grid">
                    <div className="grid_texto">
                        <h2 className='titulo__exposicao'>Exposições</h2>
                        <p>Abaixo é possível visualizar parte do acervo original que foi atingido pelo incêndio, dividido em 6 seções:</p>
                    </div>

                    <div className="secoes">
                        <img src={arqueologia} alt="" />
                        <h3>arqueologia</h3>
                    </div>
                    <div className="secoes">
                        <img src={antropologia} alt="" />
                        <h3>antropologia</h3>
                    </div>
                    <div className="secoes">
                        <img src={etnologia} alt="" />
                        <h3>etnologia</h3>
                    </div>
                    <div className="secoes">
                        <img src={geologia} alt="" />
                        <h3> geologia</h3>
                    </div>
                </div>
            </main>
          <footer className='exposicao_footer'>
          <NavDaPagina/>
          </footer>
        </>
    )
}
