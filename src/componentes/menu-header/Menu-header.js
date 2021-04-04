import React, {Component} from 'react';
import '../menu-header/Menu-header.css';
import clinica from '../menu-header/clinicaoftalmologicadelcaribe.svg'
class MenuHeader extends Component {
    render() {
        return (
                <nav className="menu">
                    <i>
                        <img className="logo" src={clinica} alt=""/>
                    </i>
                    <ul className="menu__contenedor">
                        <li className="menu__contenedor__opciones"><a href="">Inicio</a></li>
                        <li className="menu__contenedor__opciones">
                            <a href="">
                                COFCA
                                <i className="fas fa-angle-down"></i>
                            </a>
                        </li>
                        <li className="menu__contenedor__opciones">
                            <a href="">
                                Pacientes
                                <i className="fas fa-angle-down"></i>
                            </a>
                        </li>
                        <li className="menu__contenedor__opciones"><a href="">Educacion</a></li>
                        <li className="menu__contenedor__opciones"><a href="">Investigacion</a></li>
                        <li className="menu__contenedor__opciones"><a href="">FOCA</a></li>
                        <li className="menu__contenedor__opciones"><a href="">Contacto</a></li>
                    </ul>
                </nav>
        );
    }
}



export default MenuHeader;
