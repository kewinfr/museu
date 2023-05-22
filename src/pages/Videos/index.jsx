import React from 'react'
import './css/style.css'
import NavDaPagina from '../../components/NavDaPagina'
export default function Videos() {
  return (
    <>
      <main className='VideosMain'>
        <div className="Videos_grid">
          <div className="video">
            <h3 className='titulo_video'>titulo do video</h3>
            <iframe className='video_1' src="https://www.youtube.com/embed/RqlvAIlAwmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video">
            <h3 className='titulo_video'>titulo do </h3>
            <iframe className='video_1' src="https://www.youtube.com/embed/RqlvAIlAwmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video">
            <h3 className='titulo_video'>titulo do videoaaaa</h3>
            <iframe className='video_1' src="https://www.youtube.com/embed/RqlvAIlAwmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video">
            <h3 className='titulo_video'>titulo do videoaaaaaaaa</h3>
            <iframe className='video_1' src="https://www.youtube.com/embed/RqlvAIlAwmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div> 
      </main>
      <footer className='footer_video'>
      <NavDaPagina/>
      </footer>
    </>
  )
}

