import React, {Component} from 'react';
import '../top-header/Top-header.css'

class TopHeader extends Component {
    render() {
        return (
            <div className="topHeader">
                <div className={"topHeader__contenedor"}>

                    <nav className="topHeader__datos">
                        <span className="topHeader__datos__whatsaap">
                            <a href="">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </span>

                        <span className="topHeader__datos__citas">
                            <a href="">
                                <i className="fas fa-phone">
                                    <span className="texto-cita">Citas: 322 2222</span>
                                </i>
                            </a>
                        </span>

                        <span className="topHeader__datos__citas"                   >
                            <a href="">
                                <i className="fas fa-mobile-alt">
                                    <span className="texto-cita">Citas 311 111 1111</span>
                                </i>
                            </a>
                        </span>

                    </nav>

                    <nav className="topHeader__redes">
                        <a className="topHeader__redes__a" href="">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="topHeader__redes__a" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="topHeader__redes__a"href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="topHeader__redes__a"href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a className="topHeader__redes__a"href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </nav>
                </div>
            </div>
        );
    }
};


export default TopHeader;
