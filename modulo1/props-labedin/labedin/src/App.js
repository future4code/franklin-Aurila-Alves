import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media.discordapp.net/attachments/623524948664647690/979380960019775548/1653573006508.jpg" 
          nome="Aurila Sabrina Alves" 
          descricao="Olá, sou a Sabrina. Sou estudante de desenvolvimento Full Stack e trabalho no Grupo Boticário."
        />
        
        <ImagemButton 
          imagem="https://media.discordapp.net/attachments/623524948664647690/979387542199754843/arrow_downward_FILL0_wght400_GRAD0_opsz48.png" 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-conteiner'>
      <CardPequeno
          imagem="https://media.discordapp.net/attachments/623524948664647690/979392012736413746/mail_FILL0_wght400_GRAD0_opsz48.png" 
          nome="email:" 
          descricao="aurila.sabrina" 
        />
         <CardPequeno
          imagem="https://media.discordapp.net/attachments/623524948664647690/979392172002512936/home_FILL0_wght400_GRAD0_opsz48.png" 
          nome="endereço:" 
          descricao="Cruz, CE" 
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logotipo.pt/wp-content/uploads/2010/05/grupoboticario.jpg" 
          nome="Grupo Boticário" 
          descricao="Developer I - Extranet" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
