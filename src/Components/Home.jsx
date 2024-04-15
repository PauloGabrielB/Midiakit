import img1 from '../img/img1.png'
import {  FaInstagram, FaTiktok, FaPinterest,} from "react-icons/fa";
import midiakit from '../assets/midiakit.pdf';


export default function Home() {
    
    return (
        <section className="inicio">
            <div className="img">
                <img src={img1} alt="" />
            </div>

            <h1 className='titulo'>@vividaninja</h1>

            <div className="btns">
            <a href="https://www.instagram.com/vividaninja?igsh=MTJwNmg1bGd5bWNzag%3D%3D&utm_source=qr">
                <FaInstagram className='fai' />
            </a>
            <a href="https://www.tiktok.com/@vividaninja?_t=8lX3prbmDYc&_r=1">
              <FaTiktok className='fai' />  
            </a>
            <a href="https://pin.it/4H9UM5LPG">
                <FaPinterest className='fai' />
            </a>
            </div>

            <div className="btn-links">
                <buttons className="btn"><a href="https://rifa.digital/s/HMiySs5haUu">Minha Rifa</a></buttons>
                <button className='btn2'><a href={midiakit}>Midia Kit</a></button>
            </div>

        </section>
    )
}