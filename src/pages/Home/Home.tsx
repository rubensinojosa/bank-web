import apple from "/logo-apple.svg";
import appStore from "/appstore.svg"
import arrow from "/arrow-right.svg";
import arrowDown from "/arrow-down.svg";
import Card from "../../components/Card/Card";
import cards from "/cards.svg";
import cart from "/shopping-cart.svg";
import check from "/check-circle.svg";
import clock from "/clock.svg";
import dollar from "/dollar-sign.svg";
import Footer from "../../components/Footer/Footer";
import gift from "/gift.svg";
import googlePlay from "/google-play-badge.png";
import googleplay from "/logo-googleplay.svg";
import heart from "/heart.svg";
import icard from "/credit-card.svg";
import logo from "/teslabank.svg";
import mobile from "/mobile.svg";
import mouse from "/mouse-pointer.svg";
import Navbar from "../../components/Navbar/Navbar";
import percent from "/percent.svg";
import shield from "/shield.svg";
import smartphone from "/smartphone.svg";
import smile from "/smile.svg";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <section className="container-fluid vector bg-info p-0 d-flex vh-100 section-1">
        <div className="container-fluid w-50 d-flex align-items-center justify-content-center">
          <div className="title">
            <h1 className="text-primary sora-600">
              TeslaBank <br />
              Banco 100% digital
            </h1>
            <p className="inter-500">
              Abrir uma conta digital nunca foi tão simples!
            </p>
            <div className="container-fluid d-flex justify-content-between align-items-center w-75 m-0 p-0">
              
                <button type="button" className="btn btn-primary inter-600">
                  Abrir uma conta
                  <img
                    src={arrow}
                    alt="seta para direita"
                  />
                </button>
              
              <img src={apple} alt="logo apple" />
              <img src={googleplay} alt="logo google play" />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-gradient w-50 d-flex align-items-center justify-content-center div-cards">
          <img src={cards} className="img-fluid" alt="cartões de crédito" />
        </div>
      </section>

      <section className="container-fluid p-0 d-flex vh-100">
        <div className="container-fluid bg-tertiary w-50 d-flex align-items-center justify-content-center">
          <div className="z-2 position-relative" style={{ height: 504 + "px" }}>
            <img src={mobile} className="z-1 img-fluid position-relative" alt="icone de celular" />
            <img src={check} className="z-3 img-fluid position-absolute top-0 start-0 translate-middle p-4 rounded-4 icon-style" alt="icone de check" />
            <img src={mouse} className="z-3 img-fluid position-absolute top-50 start-100 translate-middle p-3 rounded-4 icon-style" alt="icone de ponteiro do mouse" />
            <img src={heart} className="z-3 img-fluid position-absolute top-100 start-0 translate-middle p-4 rounded-4 icon-style" alt="icone de coração" />
          </div>
        </div>
        <div className="container-fluid bg-tertiary w-50 d-flex align-items-center justify-content-center mobile">
          <div className="container-fluid w-75 d-flex flex-column justify-content-evenly gap-5">
            <h2 className="sora-600-sub">
              Abra sua conta <span className="text-primary">gratuita</span>!
            </h2>
            <p className="inter-400">
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento para todos os bancos sem pagar nada.
            </p>
            <ul className="list-group list-group-flush gap-4">
              <li className="list-group-item bg-transparent">
                <div className="container-fluid d-flex flex-row gap-4">
                  <div>
                    <img src={dollar} className="icon-style rounded bg-white p-2" alt="icone de dinheiro" style={{ width: 60 + "px", height: 60 + "px" }} />
                  </div>
                  <div>
                    <h3 className="inter-500-sub">Seu dinheiro rendendo mais</h3>
                    <p className="inter-400-li text-tertiary">Rendem mais que a poupança e você resgata quando quiser</p>
                  </div>
                </div>
              </li>
              <li className="list-group-item bg-transparent">
                <div className="container-fluid d-flex flex-row gap-4">
                  <div>
                    <img src={smartphone} className="icon-style rounded bg-white p-2" alt="icone de dinheiro" style={{ width: 60 + "px", height: 60 + "px" }} />
                  </div>
                  <div>
                    <h3 className="inter-500-sub">Conta digital 100% grátis</h3>
                    <p className="inter-400-li text-tertiary">Transferências, boletos de depósito e outros serviços gratuitos</p>
                  </div>
                </div>
              </li>
              <li className="list-group-item bg-transparent">
                <div className="container-fluid d-flex flex-row gap-4">
                  <div>
                    <img src={smile} className="icon-style rounded bg-white p-2" alt="icone de dinheiro" style={{ width: 60 + "px", height: 60 + "px" }} />
                  </div>
                  <div>
                    <h3 className="inter-500-sub">Cartão sem anuidade</h3>
                    <p className="inter-400-li text-tertiary">Conta digital com cartão de crédito sem anuidade e sem complicação</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-fluid waves bg-info p-0 d-flex flex-column vh-100">
        <div className="container-sm">
          <div className="pt-5 mt-5 w-50">
            <h3 className="inter-500 text-primary">#INOVAÇÃO</h3>
            <p className="sora-600-sub">Quais as vantagens de usar <span className="text-primary">TeslaBank</span>?</p>
          </div>
          <div className="container p-0">
            <div className="row w-75 cards">
              <div className="col mb-4">
                <Card icone={icard} titulo={"Cartão TeslaBank"} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam."} rota={"#"} link={"VEJA AS OPÇÕES"} />
              </div>
              <div className="col mb-4">
                <Card icone={cart} titulo={"Investimentos"} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam."} rota={"#"} link={"CONHEÇA OS INVESTIMENTOS"} />
              </div>
              <div className="col mb-4">
                <Card icone={clock} titulo={"Atendimento 24h"} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam."} rota={"#"} link={"VEJA AS OPÇÕES"} />
              </div>
            </div>
            <div className="row pe-4">
              <div className="col offset-md-3 mb-4">
                <Card icone={shield} titulo={"Segurança"} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam."} rota={"#"} link={"CONHEÇA AS SEGURANÇAS"} />
              </div>
              <div className="col mb-4">
                <Card icone={percent} titulo={"Sem taxas"} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam."} rota={"#"} link={"COMO FUNCIONA"} />
              </div>
              <div className="col mb-4">
                <Card icone={gift} titulo={"Receba prêmios"} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam."} rota={"#"} link={"VEJA COMO"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-tertiary p-0">
        <div className="container d-flex flex-column justify-content-center gap-5 pb-5">
          <div className="pt-5 mt-5 w-50">
            <h3 className="inter-500 text-primary">#DEPOIMENTOS</h3>
            <p className="sora-600-sub">TeslaBank fora das telinhas: <span className="inter-400-review">Veja o que falam sobre o nosso serviço</span></p>
          </div>
          <div className="container-fluid">
            <ul className="d-flex flex-row p-0">
              <li className="pe-3">
                <h3 className="li-style sora-400">MARIA SILVA</h3>
                <p className="fst-italic inter-400">"O TeslaBank oferece uma experiência incrível, com facilidade e praticidade em todas as transações!"</p>
              </li>
              <li className="pe-3">
                <h3 className="li-style sora-400">PEDRO ALMEIDA</h3>
                <p className="fst-italic inter-400">"Estou impressionado com a eficiência e segurança do meu banco digital. Recomendo a todos!"</p>
              </li>
              <li className="pe-3">
                <h3 className="li-style sora-400">ANA OLIVEIRA</h3>
                <p className="fst-italic inter-400">"Com o TeslaBank, tenho total controle das minhas finanças, além de um atendimento excelente. Estou muito satisfeito!"</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-fluid p-0 d-flex">
        <div className="container-fluid bg-info w-75 d-flex align-items-center justify-content-center">
          <div className="container-sm d-flex flex-column pt-5 mt-5 w-75 pb-5 gap-5">
            <h2 className="sora-600-app">Uma nova experiência em <span className="text-primary">serviços financeiros</span>. <br></br>
              Somos digital, somos TeslaBank.</h2>
            <p className="inter-400 w-100">Seja para realizar transações, gerenciar suas finanças ou acessar serviços personalizados, o TeslaBank está aqui para transformar a maneira como você lida com suas necessidades financeiras.</p>
            <div className="d-flex align-items-center gap-4">
              <a className="icon-link" href="https://www.apple.com/app-store/" target="_blank">
                <img src={appStore} className="img-fluid img-appstore-style" alt="icone loja de aplicativos da Apple" />
              </a>
              <a className="icon-link" href="https://play.google.com/store/apps" target="_blank">
                <img src={googlePlay} className="img-fluid img-google-style" alt="icone loja de aplicativos da Google" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-info w-50 d-flex align-items-center justify-content-center pb-5 pt-5">
          <img src={logo} className="img-fluid" alt="" />
        </div>
      </section>

      <section className="section-duvidas bg-tertiary">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-0">
          <h5 className="inter-500 text-primary">#AJUDA</h5>
          <h3 className="sora-600-sub">Ficou alguma dúvida?</h3>
          <p className="inter-400">Acompanhe os tópicos mais acessados do nosso suporte.</p>
          <div className="p-5">
            <ul className="list-group list-group-flush gap-4">
              <li className="list-group-item bg-transparent">
                <div className="container-fluid d-flex flex-row gap-4">
                  <div>
                    <img src={smartphone} className="icon-style rounded bg-white p-2" alt="icone de dinheiro" style={{ width: 60 + "px", height: 60 + "px" }} />
                  </div>
                  <div className="w-75">
                    <h3 className="inter-500-sub">Como abrir minha conta?</h3>
                    <p className="inter-400-li text-tertiary">Abra sua conta no TeslaBank em poucos passos.</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <button type="button" className="btn p-0"><img src={arrowDown} alt="icone de seta apontando para baixo" /></button>
                  </div>
                </div>
              </li>
              <li className="list-group-item bg-transparent">
                <div className="container-fluid d-flex flex-row gap-4">
                  <div>
                    <img src={smartphone} className="icon-style rounded bg-white p-2" alt="icone de dinheiro" style={{ width: 60 + "px", height: 60 + "px" }} />
                  </div>
                  <div className="w-75">
                    <h3 className="inter-500-sub">Como solicitar crédito?</h3>
                    <p className="inter-400-li text-tertiary">Solicite crédito de forma simples e rápida conosco.</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <button type="button" className="btn p-0"><img src={arrowDown} alt="icone de seta apontando para baixo" /></button>
                  </div>
                </div>
              </li>
              <li className="list-group-item bg-transparent">
                <div className="container-fluid d-flex flex-row gap-4">
                  <div>
                    <img src={smartphone} className="icon-style rounded bg-white p-2" alt="icone de dinheiro" style={{ width: 60 + "px", height: 60 + "px" }} />
                  </div>
                  <div className="w-75">
                    <h3 className="inter-500-sub">Quanto rende meu dinheiro?</h3>
                    <p className="inter-400-li text-tertiary">Descubra o rendimento potencial do seu dinheiro conosco.</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <button type="button" className="btn p-0"><img src={arrowDown} alt="icone de seta apontando para baixo" /></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
