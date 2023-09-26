import { useState, useEffect } from "react";
import iuricode from "/logo-iuricode.svg"
import arrowUp from "/arrow-down.svg"
import S from "./Footer.module.css"

const Footer = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleButtonClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="copyright-style">
            <div className="h-100 w-50 sora-400 d-flex justify-content-center align-items-center"><p className="m-0">Copyright© 2023 TeslaBank. Todos os direitos reservados.</p></div>
            <div className="h-100 w-50 sora-400 d-flex justify-content-center align-items-center"><p className="text-primary m-0">Powered by <img src={iuricode} alt="icone iuricode" /></p></div>
            {showButton && (
            <button onClick={handleButtonClick} className={S.button}><img src={arrowUp} className={S.arrow} alt="icone de seta apontando para cima" /></button>
            )}
        </div>
    )
}

export default Footer