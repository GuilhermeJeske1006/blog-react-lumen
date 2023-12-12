import React from 'react';

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className=' text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' , height: 400}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Seja bem vindo</h1>
              <h4 className='mb-3'>Conheça abaixa um pouco de nosso blog</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Ver mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}