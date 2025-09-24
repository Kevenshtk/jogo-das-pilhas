import {
  esconderTela,
  montarTelaManual,
  montarTelaDificuldade,
  salvarDificuldade,
  montarTelaJogo,
  iniciarRodada,
} from "./view/view.js";

salvarDificuldade(0);

function iniciarJogo(modo) {
  esconderTela("telaInicio");
  montarTelaDificuldade(modo);

  const btnJogar = document.querySelector("#telaDificuldade > .btn-jogar");
  btnJogar.onclick = () => {
    esconderTela("telaDificuldade");
    montarTelaJogo(modo);
    iniciarRodada(modo);
  };
}

window.iniciarJogo = iniciarJogo;
window.salvarDificuldade = salvarDificuldade;
window.montarTelaManual = montarTelaManual;