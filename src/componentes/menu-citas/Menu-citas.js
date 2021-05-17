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
