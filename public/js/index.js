import {
  esconderTela,
  montarTelaManual,
  montarTelaDificuldade,
  salvarDificuldade,
  montarTelaJogo,
  iniciarRodada,
} from "./view/view.js";

import {
  setMododejogo
} from "./controller/controller.js";

salvarDificuldade(0);

function iniciarJogo(modo) {
  esconderTela("telaInicio");
  setMododejogo(modo);
  montarTelaDificuldade(modo);

  const btnJogar = document.querySelector("#telaDificuldade > nav >  .btn-jogar");
  btnJogar.onclick = () => {
    esconderTela("telaDificuldade");
    montarTelaJogo(modo);
    iniciarRodada(modo);
  };
}

window.iniciarJogo = iniciarJogo;
window.salvarDificuldade = salvarDificuldade;
window.montarTelaManual = montarTelaManual;

function abrirVideo(src) {
  const modal = document.getElementById("modalVideo");
  const videoElement = document.getElementById("playerVideo");
  const sourceElement = document.getElementById("videoSource");
  
  sourceElement.src = src;
  videoElement.load();
  modal.style.display = "flex";
  videoElement.play();
}

function fecharVideo() {
  const modal = document.getElementById("modalVideo");
  const videoElement = document.getElementById("playerVideo");
  
  modal.style.display = "none";
  videoElement.pause();
  videoElement.currentTime = 0;
}

window.abrirVideo = abrirVideo;
window.fecharVideo = fecharVideo;