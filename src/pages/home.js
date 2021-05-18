import React, {Component} from 'react';
import TopHeader from "../componentes/top-header/Top-header";
import MenuHeader from "../componentes/menu-header/Menu-header";
import MenuCitas from "../componentes/menu-citas/Menu-citas";
import banneroftalomology from "../assets/undraw_doctors_hwty.png"
import teleoftalmology from '../assets/teleoftalmologia.svg'
import optica from "../assets/optica-panorama.svg"
import donation from "../assets/donation.svg"
import eye from "../assets/eye.svg"
import education from "../assets/graduation.svg"
import pqrs from "../assets/pqrs.svg"
import phonemail from "../assets/phone-mail.svg"
import doctor from "../assets/doctor.svg"
import "./home.css"


class HomePage extends Component {
    render() {
        return (
           <>
               <header>
                   <TopHeader/>
                   <MenuHeader/>
                   <MenuCitas/>
               </header>

               <main className="home__main">
                   <div className="home__main__container">
                       <section className="Home__landingpage">
                           <img className="banneroftalomology" src={banneroftalomology} alt="ofthalmology"/>
                       </section>

                       <article className="home__trademarks">

                           <div className="home__trademarks__options">
                               <img src={phonemail} alt=""/>
                               <h6>Pide tu cita</h6>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={doctor} alt=""/>
                               <h6>Equipo medico</h6>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={teleoftalmology} alt=""/>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={eye} alt=""/>
                               <h6>Liberate de tus gafas</h6>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={education} alt=""/>
                               <h6>Educacion</h6>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={optica} alt=""/>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={donation} alt=""/>
                               <h6>Dona una luz</h6>
                           </div>

                           <div className="home__trademarks__options">
                               <img src={pqrs} alt=""/>
                               <h6>PQRS</h6>
                           </div>

                       </article>
                   </div>
               </main>
           </>
        );
    }
}



export default HomePage;
