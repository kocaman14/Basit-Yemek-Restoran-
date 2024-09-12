
import { useState } from 'react';
import './styles.css';

function App() {
    const[menu,setMenu]=useState(false)
    const[ınfo,setInfo]=useState(false)
    const[location,setLocation]=useState(false)
const handleInfoClick = () =>{
setInfo((pre)=>!pre)

}
const handleMenuClick = () =>{
setMenu((pre)=>!pre)

}

const handleNameClick = () =>{
    setLocation((pre)=>!pre)

}



  return (
    <>
    <div>
      <header>
        <div className="button-container">
          <button onClick={handleMenuClick}>Menu</button>
          <button onClick={handleInfoClick}>Hakkında</button>
          <button onClick={handleNameClick}>Saatler & Lokasyon</button>
        </div>
      </header>
      
      <main>
        <h1 className="logo-container">Basit Yemekler Restoranı</h1>
        {ınfo?<p className="info-container">
          Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. 
          Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı 
          balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki 
          Fantezi Yemek Kafe'yi deneyin.
        </p>:null}
        {menu?<div className="image-container">
          <div className="image-wrapper">
            <img className="hot-dog" src="images/hotdogs.jpg" alt="Hot Dogs" />
          </div>
          <div className="image-wrapper">
            <img src="images/sandwich.jpg" alt="Sandwich" />
          </div>
          <div className="image-wrapper">
            <img src="images/hamburger.jpg" alt="Hamburger" />
          </div>
        </div>:null}
      </main>


    </div>
      <footer>
      
            {location? <span>Adres:Atatürk Mahallesi Alemdağ Caddesi No:36/A Ümraniye 34692 İstanbul/Ümraniye </span>:<p>  Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"> Coding Company</a>™.
                </p>}
      
      </footer>
    </>
  );
}

export default App;
