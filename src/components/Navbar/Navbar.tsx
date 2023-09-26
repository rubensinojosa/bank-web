import { useEffect, useState } from 'react';
import logo from '/logo.svg'
import logoWhite from '/logo-white.svg'
import user from '/user.svg'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="z-3 container-sm d-flex justify-content-center">
                {scrolled ? <nav className="navbar navbar-expand-lg bg-gradient fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src={logoWhite} alt="logo teslabank" style={{ width: 30 + 'px' }} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        TeslaBank
                                    </a>
                                    <ul className="dropdown-menu inter-500-sub">
                                        <li><a className="dropdown-item" href="#">Sobre nós</a></li>
                                        <li><a className="dropdown-item" href="#">Institucional</a></li>
                                        <li><a className="dropdown-item" href="#">Relatórios</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Conta digital
                                    </a>
                                    <ul className="dropdown-menu inter-500-sub">
                                        <li><a className="dropdown-item" href="#">Abra sua conta</a></li>
                                        <li><a className="dropdown-item" href="#">Serviços</a></li>
                                        <li><a className="dropdown-item" href="#">Benefícios</a></li>
                                        <li><a className="dropdown-item" href="#">Dúvidas</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pra você
                                    </a>
                                    <ul className="dropdown-menu inter-500-sub">
                                        <li><a className="dropdown-item" href="#">Crédito</a></li>
                                        <li><a className="dropdown-item" href="#">Cartões</a></li>
                                        <li><a className="dropdown-item" href="#">Investimentos</a></li>
                                        <li><a className="dropdown-item" href="#">Conta corrente</a></li>
                                        <li><a className="dropdown-item" href="#">Seguros</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav d-flex justify-content-end w-100">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Login <img src={user} alt="user" style={{ width: 15 + 'px' }} /></a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </nav> :
                    <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
                        <div className="container">
                            <a className="navbar-brand" href="#"><img src={logo} alt="logo teslabank" style={{ width: 30 + 'px' }} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            TeslaBank
                                        </a>
                                        <ul className="dropdown-menu inter-500-sub">
                                            <li><a className="dropdown-item" href="#">Sobre nós</a></li>
                                            <li><a className="dropdown-item" href="#">Institucional</a></li>
                                            <li><a className="dropdown-item" href="#">Relatórios</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Conta digital
                                        </a>
                                        <ul className="dropdown-menu inter-500-sub">
                                            <li><a className="dropdown-item" href="#">Abra sua conta</a></li>
                                            <li><a className="dropdown-item" href="#">Serviços</a></li>
                                            <li><a className="dropdown-item" href="#">Benefícios</a></li>
                                            <li><a className="dropdown-item" href="#">Dúvidas</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pra você
                                        </a>
                                        <ul className="dropdown-menu inter-500-sub">
                                            <li><a className="dropdown-item" href="#">Crédito</a></li>
                                            <li><a className="dropdown-item" href="#">Cartões</a></li>
                                            <li><a className="dropdown-item" href="#">Investimentos</a></li>
                                            <li><a className="dropdown-item" href="#">Conta corrente</a></li>
                                            <li><a className="dropdown-item" href="#">Seguros</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav d-flex justify-content-end w-100">
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">Login <img src={user} alt="user" style={{ width: 15 + 'px' }} /></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                }
            </div>
        </>
    )
}

export default Navbar