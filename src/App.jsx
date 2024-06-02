import { useState } from 'react'
import './App.css'
import { CgWebsite } from "react-icons/cg";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { TbHelmet } from "react-icons/tb";
import { GiJewelCrown } from "react-icons/gi";
import { GiSamusHelmet } from "react-icons/gi";

import img from './img/img1.png'
import file from '../public/midiakit.pdf'

function App() {
 

  return (
      <section className="links-page">
        <div className="links-container">
            <div className="links-img">
              <img src={img} alt="" />
            </div>
            <div className="user">
            <h1>@vividaninja</h1>
            </div>
            <h1>Links :</h1>
            <div className="links-button">
              <div className="button"><TbPigMoney className='ico' /><a href="https://rifa.digital/s/HMiySs5haUu"><h1>Minha Rifa</h1></a></div>
              <div className="button"><CgWebsite className='ico' /><a href={file}><h1>Mídia Kit</h1></a></div>
              <div className="button"><FaInstagram className='ico' /><a href="https://www.instagram.com/vividaninja?igsh=MTJwNmg1bGd5bWNzag%3D%3D&utm_source=qr"><h1>Instagram</h1></a></div>
              <div className="button"><FaTiktok className='ico' /><a href="https://www.tiktok.com/@vividaninja?_t=8lX3prbmDYc&_r=1"><h1>TikTok</h1></a></div>
              <div className="button"><FaPinterest className='ico' /><a href="https://www.tiktok.com/@vividaninja?_t=8lX3prbmDYc&_r=1"><h1>Pinterest</h1></a></div>
              <h1 className='parceiros'>Parceiros :</h1>
              <div className="button"><TbHelmet className='ico' /><a href="https://www.tiktok.com/@vividaninja?_t=8lX3prbmDYc&_r=1"><h1>Race Tech</h1></a></div>
              <div className="button"><GiSamusHelmet className='ico' /><a href="https://www.instagram.com/linkaknit?igsh=MWp4d2J2dDFqYXk5OQ=="><h1>Linka Knit</h1></a></div>
              <div className="button"><GiJewelCrown className='ico' /><a href="https://www.instagram.com/hira_semijoias?igsh=MWJhMDZiODNsaWx1dg=="><h1>Hira Semijoias</h1></a></div>
            </div>
        </div>
      </section>
  )
}

export default App
