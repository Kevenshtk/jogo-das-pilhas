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