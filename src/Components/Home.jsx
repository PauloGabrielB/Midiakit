import img1 from '../img/img1.png'
import midiakit from '../assets/midiakit.pdf';
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
    
    return (
        <section className="inicio">
            <div className="all">
            <div className="img">
                <img src={img1} alt="" />
            </div>

            <h1 className='titulo'>@vividaninja</h1>
            <p>Links :</p>

            <div className="btn-links">
                <button className="btn"><a href="https://rifa.digital/s/HMiySs5haUu">Minha Rifa</a></button>
                <button className='btn'><a className='btn2a' href={midiakit}>Midia Kit</a></button>
                <a href="https://www.instagram.com/vividaninja?igsh=MTJwNmg1bGd5bWNzag%3D%3D&utm_source=qr">
                <button className='btn'>
                <FaInstagram className='wicon' /> Instagram
                </button>
                </a>
                
                <a href="https://www.tiktok.com/@vividaninja?_t=8lX3prbmDYc&_r=1">
                <button className='btn'>
                <IoLogoTiktok className='wicon1' />TikTok
                </button>
                </a>
                
                <a className='aa' href="https://pin.it/4H9UM5LPG">
                <button className="btn">
                <IoLogoPinterest className='wicon' />Pinterest
                </button>

                <div className="parceiros">
                    <h1>Parceiros</h1>
                    <a href="https://www.instagram.com/racetechbrasil?igsh=NWd0aGpjN2dvMXlr">
                        <div className="btn"><FaInstagram className='wicon2' />Race Tech</div>
                    </a>
                    
                </div>
                </a>
                
            </div>
            </div>
            

        </section>
    )
}