import React, {Component} from 'react';
import '../menu-citas/menu-citas.css'
class MenuCitas extends Component {
    render() {
        return (
                <nav className="menucitas">
                    <ul className="menucitas__contenedor">
                        <li className="menucitas__opciones">
                            <a className="menucitas__opciones--a" href="">Proteccion de datos
                                <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className="menucitas__submenu">
                                <li className="menucitas__submenu__opciones">
                                    <a href="" className="menucitas__submenu__opciones__link"><i className="fas fa-user"></i>
                                    Aviso de Privacidad</a>
                                </li>

                                <li className="menucitas__submenu__opciones">
                                    <a href="" className="menucitas__submenu__opciones__link"><i className="fas fa-user"></i>
                                        Politica de Proteccion de Datos Personales</a>
                                </li>

                                <li className="menucitas__submenu__opciones">
                                    <a href="" className="menucitas__submenu__opciones__link"><i className="fas fa-user"></i>
                                        Politica de Cookies</a>
                                </li>

                                <li className="menucitas__submenu__opciones">
                                    <a href="" className="menucitas__submenu__opciones__link"><i className="fas fa-user"></i>
                                        Politica de Propiedad Intelectual e Industrial</a>
                                </li>

                            </ul>
                        </li>
                        <li className="menucitas__opciones">
                            <a className="menucitas__opciones--a" href="">Pide tu cita
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </li>
                        <li className="menucitas__opciones">
                            <a className="menucitas__opciones--a" href="">¡Ordena tus gafas aqui!
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="menucitas__opciones">
                            <a className="menucitas__opciones--a" href="">Historia Clinica y Examenes
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default MenuCitas;
