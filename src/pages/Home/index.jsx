import React from 'react'
import './css/home.css'
import Museu from '../../components/img/museu__banner.png'
import Depoimento from '../../components/img/depoimento_museu.png'
import FundoFoto from "./img/fundo-foto.png"
import museu1 from "./img/museu1.jpg"
import museu2 from "./img/museu2.jpg"
import museu3 from "./img/museu3.jpg"
import museu4 from "./img/museu4.jpg"
import museu5 from "./img/museu5.jpg"
import museu6 from "./img/museu6.jpg"
import museu7 from "./img/museu7.jpg"
import NavDaPagina from '../../components/NavDaPagina'
export default function Home() {
  return (
    <>
      <main className='HomeMain'>
        <div className="home__grid">
          <img src={Museu} alt=" ral de entrada  museu nacional" className='museu_img' />
          <img src={Depoimento} alt="Museu nacional criado em 1922, é um dos mais importantes museus do brasil reunindo um acervo de mais de 250 mil itens Direção do museu" className='depoimentos-img' />
          <ul className='home_grid___lista'>
            <li>
              <h3>VIDEO: CONHEÇA O MUSEU</h3>
              <iframe src="" >{/*substitui esse iframe */}</iframe>
              <h3>exposição</h3>
              <ul>
                <li>os asustadores insetos</li>
                <li>o cranio de luiza a mulher mais antiga do brasil</li>
                <li>preguiça gigante e tigre-dente-de-sabre</li>
                <li>plantas do brasil central</li>
                <li>teresa cristina: a imperatriz arquiologa</li>
                <li>arte com Dinossauros</li>
                <a href="#">veja todos</a>

              </ul>
            </li>
            <li>
              <h3>MAPA: ENCONTRE O MUSEU</h3>
              <iframe src="" >{/*substitui esse iframe */}</iframe>
              <h3>200 ANOS DE HISTORIA</h3>
              <ul>
                <p className='sobre_museu'>numa ponta que avança sobre o mar conhecida como ponta do calabouço
                  entre as praias de piaçaba e santa luzia no centro historico do rio de janeiro os portugueses construiram em 1603 a fortaleza de santiago origem do conjunto aquitetonico que hoje abriga o museu de historia nacional
                </p>
                <a href="#">leia mais</a>

              </ul>
            </li>
            <li className='visita__grid'>
              <div>
                <h3>Faça uma visita</h3>
                <p>Data <input type="data" />Qtd pesoas <input type="number" /></p>
                <button>verificar disponibilidade</button>
              </div>
              <figure>

                <figcaption>galeria de fotos</figcaption>
                <img src={museu7} className='img_art' alt="" />
                <img src={museu1} className='img_art' alt="" />
                <img src={museu3} className='img_art' alt="" />
                <img src={museu2} className='img_art' alt="" />

              </figure>
            </li>
          </ul>
        </div>
        <footer>

          <NavDaPagina >

            <p className='direitos_museu'>2019 museu nacional todos os direitos reservados</p>
          </NavDaPagina>
        </footer>


      </main>

    </>
  )
}
