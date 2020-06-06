/* eslint-disable jsx-a11y/accessible-emoji */
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import React, { useState } from "react";
import "./App.css";
import "./arrow.css";
import logo from "./assets/logo-pi.png";
// import arrow from "./assets/arrow-down.svg";
import "./index.css";
import { genArrayColors } from "./Utils";

const App = () => {
  const [leaving, setLeaving] = useState(0);
  const [section, setSection] = useState(0);

  const onLeave = (origin, destination, direction) => {
    setLeaving(origin.index);
    console.log("leaving", origin.index);
  };

  const afterLoad = (origin, destination, direction) => {
    setSection(destination.index);
    console.log("section", destination.index);
  };

  const lastSection = () => leaving === 7;

  const renderScroll = () => (
    <div className="mouse_scroll">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );

  const renderGoToSection = (fullpageApi, title, section) => (
    <div className="button-wrapper">
      <a
        href="/"
        className="button"
        onClick={(e) => {
          e.preventDefault();
          fullpageApi.moveTo(section);
        }}
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );

  return (
    <div className="app-container">
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={genArrayColors(10, "#8C3590")}
        onLeave={onLeave}
        afterLoad={afterLoad}
        navigation={true}
        menu={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <p className="home-title">
                  Fala,
                  <br />
                  Crypto Master!
                  <br /> 🏆✨
                </p>
              </div>
              <div className="section">
                <p className="title">Se você chegou até aqui... 🏃🏻</p>
                <p>é porque você pode estar na busca</p>
                <p>por ganhar algum dinheiro extra 💰</p>
                <p>Estou certo? </p>
                {renderGoToSection(fullpageApi, "Ir Direto Ao Ponto ⚡", 8)}
              </div>
              <div className="section">
                <p className="title">Não entendeu ainda? 🤷🏻‍♂️</p>
                <p>
                  Não se preocupe, já te explico.
                  <br />
                  Esta é uma oportunidade única.
                  <br />
                  Mas aproveite agora!! pois
                  <br />
                  ela pode não durar
                  <br />
                  muito tempo... ⌛
                </p>
              </div>

              <div className="section">
                <p className="title">O que precisa saber... 💡</p>
                <p>Primeiro sobre o mercado</p>
                <p>de criptomoedas... Isso mesmo,</p>
                <p>
                  as <span className="featured">CRIPTOMOEDAS!!! 🥇</span>
                </p>
                <p>Você vai ficar surpreso</p>
                <p>com essa... 🧐</p>
              </div>

              <div className="section">
                <p className="title">Talvez você ainda não saiba...</p>
                <p>mas se você iniciar nesse mercado,</p>
                <p>vai por mim, em alguns meses</p>
                <p>vai agradecer ao tio Crypllo 🔑 aqui</p>
                <p>por ter te mostrado o caminho</p>
                <p> das pedras!! 🔮</p>
              </div>

              <div className="section">
                <p className="title">O Método... ⛏</p>
                <p>esse método funciona por mineração,</p>
                <p>e você precisa ativar a cada 24hs.</p>
                <p>Sem usar bateria do celular,</p>
                <p>a mineração acontece na nuvem 🌩️</p>
                <p>pensa na facilidade!! 💸</p>
              </div>

              <div className="section">
                <p className="title">Sem mais enrolação!!</p>
                <p>Vamos então ao que interessa...</p>
                <p>A seguir, os passos para você começar</p>
                <p>a ganhar moedas digitais ainda hoje!!!</p>
              </div>

              <div className="section">
                <p className="step-title">Passo 1 (Facebook)</p>
                <p className="steps">
                  {" "}
                  1️⃣ Primeiro, você precisa de um celular
                  <br /> e uma conta no Facebook.{" "}
                </p>
                <p className="steps">
                  {" "}
                  2️⃣ Depois você precisa instalar esse app:
                </p>
                <p className="step-link-pi">
                  <a
                    className="app-link"
                    href="https://play.google.com/store/apps/details?id=com.blockchainvault"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="pi-logo" src={logo} alt="logo" /> PI Network
                  </a>
                </p>

                <p className="steps">
                  3️⃣ Com o app instalado,
                  <br /> entre com o seu Facebook
                </p>
                <p className="steps">
                  4️⃣ Depois, utilize meu código de indicação:
                </p>
                <p className="steps">
                  <span className="crypllo-code">crypllo 🔥</span>
                </p>
                <p className="footer">
                  🆙 Seguindo os passos acima,
                  <br />
                  você já consegue minerar!!! 🔑🏆
                </p>
                {renderGoToSection(fullpageApi, "Calma... Minerar? 😅", 3)}
              </div>

              <div className="section">
                <p className="step-title">Passo 2 (SMS)</p>
                <p className="steps">
                  1️⃣ Primeiro, você precisa de um celular que receba SMS
                </p>
                <p className="steps">
                  2️⃣ Depois você precisa instalar esse app:
                </p>
                <p className="step-link-pi">
                  <a
                    className="app-link"
                    href="https://play.google.com/store/apps/details?id=com.blockchainvault"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="pi-logo" src={logo} alt="logo" /> PI Network
                  </a>
                </p>

                <p className="steps">
                  3️⃣ Com o app instalado,
                  <br />
                  informe seu número e crie uma senha{" "}
                </p>
                <p className="steps-details">
                  anote a senha 📝
                  <br />
                  para não esquecer 😩
                </p>
                <p className="steps">
                  4️⃣ Depois, utilize o código:{" "}
                  <span className="crypllo-code">crypllo 🔥</span>
                </p>
                <p className="footer">
                  🆙 Seguindo os passos acima,
                  <br /> você já pode começar a minerar!!! 🔑🏆
                </p>
                {renderGoToSection(fullpageApi, "Para tudo!!! 😅", 3)}
              </div>

              <div className="section">
                <p className="finish-title">Dúvidas? 🙄</p>
                <p className="finish-words">Se você ainda tem dúvidas</p>
                <p className="finish-words">ou tem interesse em saber</p>
                <p className="finish-words">como aumentar os seus ganhos</p>
                <p className="finish-words-highlights">
                  incluindo outras cryptos!!! 💰
                </p>
                <p className="finish-footer">
                  Entre no meu canal do Telegram:{" "}
                </p>
                <div className="button-wrapper">
                  <a
                    className="button"
                    href="https://t.me/CryplloMasters"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    t.me/CryplloMasters 🔑🏆
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      />

      {!lastSection() && renderScroll()}
    </div>
  );
};

export default App;
