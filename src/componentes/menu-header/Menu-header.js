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
                        <li className="menu__contenedor__opciones"><a className="a-opciones" href="">Inicio</a></li>
                        <li className="menu__contenedor__opciones"><a className="a-opciones" href="">COFCA<i className="fas fa-angle-down"></i></a>
                            <ul className="submenu">
                                <li className="sublista"><a className="sub-a" href="">Quienes somos</a></li>
                                <li className="sublista"><a className="sub-a" href="">Historia</a></li>
                                <li className="sublista"><a className="sub-a" href="">Nuestras Citas</a></li>
                                <li className="sublista"><a className="sub-a" href="">Premios y Certificaciones</a></li>
                                <li className="sublista"><a className="sub-a" href="">Sedes</a></li>
                            </ul>
                        </li>
                        <li className="menu__contenedor__opciones">
                            <a className="a-opciones" href="">
                                Pacientes
                                <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                                <li className="sublista"><a className="sub-a" href="">Especialidades</a></li>
                                <li className="sublista"><a className="sub-a" href="">Equipo medico</a></li>
                            </ul>
                        </li>
                        <li className="menu__contenedor__opciones"><a className="a-opciones" href="">Educacion</a></li>
                        <li className="menu__contenedor__opciones">
                            <a className="a-opciones" href="">
                                Investigacion
                                <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                                <li className="sublista"><a className="sub-a" href="">¿Que es CIRVO?</a></li>
                                <li className="sublista"><a className="sub-a" href="">Equipo de investigacion</a></li>
                                <li className="sublista"><a className="sub-a" href="">Comite de etica</a></li>
                            </ul>
                        </li>
                        <li className="menu__contenedor__opciones"><a className="a-opciones" href="">FOCA</a></li>
                        <li className="menu__contenedor__opciones"><a className="a-opciones" href="">Contacto</a></li>
                    </ul>
                </nav>
        );
    }
}



export default MenuHeader;
