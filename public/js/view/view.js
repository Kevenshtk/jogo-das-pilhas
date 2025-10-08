import {
  getNivelDificuldadeAnterior,
  setNivelDificuldadeAnterior,
  setNivelDificuldade,
  selecionarRegra,
  gerarAlternativas,
  checarSeparacao,
} from "../controller/controller.js";

let draggedItem = null;

function inicializarArrastar() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("dragstart", getImgArrastar);
    img.addEventListener("dragend", removerImgArrastar);
  });

  [pilhaPrincipal, pilhaSecundaria].forEach((pilha) => {
    pilha.addEventListener("dragover", aceitarImgArrastar);
    pilha.addEventListener("dragenter", addClassDestaque);
    pilha.addEventListener("dragleave", removerClassDestaque);
    pilha.addEventListener("drop", addImgPilhaPrincipal);
  });
}

function getImgArrastar(e) {
  draggedItem = e.target;
  draggedItem.classList.add("dragging");
}

function removerImgArrastar(e) {
  draggedItem.classList.remove("dragging");
  draggedItem = null;
}

function aceitarImgArrastar(e) {
  e.preventDefault();
}

function addClassDestaque(e) {
  e.preventDefault();
  this.classList.add("over");
}

function removerClassDestaque(e) {
  this.classList.remove("over");
}

function addImgPilhaPrincipal(e) {
  this.classList.remove("over");
  if (draggedItem) {
    this.appendChild(draggedItem);
  }
}

function esconderTela(tela) {
  const telaSelecionada = document.getElementById(`${tela}`);
  telaSelecionada.style.display = "none";
}

function voltarInicio() {
  const telaInicio = document.getElementById("telaInicio");
  const telaJogo = document.getElementById("telaJogo");
  const telaManual = document.getElementById("telaManual");
  const telaDificuldade = document.getElementById("telaDificuldade");

  telaInicio.style.display = "flex";
  telaJogo.style.display = "none";
  telaManual.style.display = "none";
  telaDificuldade.style.display = "none";
}

function montarTelaManual() {
  esconderTela("telaInicio");
  const tela = document.getElementById("telaManual");
  tela.style.display = "flex";

  const btnVoltar = document.querySelector("#telaManual > .btn-voltar-inicio");
  btnVoltar.onclick = voltarInicio;
}

function montarTelaDificuldade(modo) {
  const tela = document.getElementById("telaDificuldade");
  tela.style.display = "flex";

  const titulo = document.querySelector("#telaDificuldade > .titulo");
  titulo.textContent = modo === 1 ? "Descubra a Pilha" : "Monte a Pilha";

  const btnVoltar = document.querySelector("#telaDificuldade > .btn-voltar-inicio");
  btnVoltar.onclick = voltarInicio;
}

function alterarLegendaDificuldade(nivel) {
  const info = [
    { titulo: "Qualquer possibilidade de lógica.", desc: "" },
    {
      titulo: "Lógica com apenas uma condição:",
      desc: "Uma das características da figura deve corresponder à característica sorteada.",
    },
    {
      titulo: "Lógica com apenas uma condição:",
      desc: "Uma das características da figura deve ser maior ou menor que a característica sorteada.",
    },
    {
      titulo: "Lógica com duas condições:",
      desc: "Para cada característica sorteada, ambas devem corresponder às características da figura.",
    },
    {
      titulo: "Lógica com duas condições:",
      desc: "Para cada característica sorteada, pelo menos uma deve corresponder às características da figura.",
    },
    {
      titulo: "Lógica com duas condições:",
      desc: "Para cada característica sorteada, elas podem ser tanto ambas quanto uma apenas maior ou menor que a característica da figura.",
    },
  ];

  const nivelAnterior = getNivelDificuldadeAnterior();

  if (nivel !== nivelAnterior) {
    const btnAnterior = document.getElementById(`nivel-${nivelAnterior}`);
    btnAnterior.style.color = "#ffff";
    setNivelDificuldadeAnterior(nivel);
  }

  const titulo = document.querySelector(".info > .info-titulo");
  const desc = document.querySelector(".info > .info-desc");
  const btn = document.getElementById(`nivel-${nivel}`);
  btn.style.color = "#01883eff";

  titulo.textContent = info[nivel].titulo;
  desc.textContent = info[nivel].desc;
}

function salvarDificuldade(nivel) {
  setNivelDificuldade(nivel);
  alterarLegendaDificuldade(nivel);
}

const modal = document.getElementById("modal");
const divManual = document.querySelector(".modal-manual");
const divConcicao = document.querySelector(".modal-condicao");
const divAlternativas = document.querySelector(".alternativas");
const btnAbrirModal = document.querySelector(".btn-abrir-modal");
const btnFecharModal = document.querySelector(".btn-fechar-modal");

function abrirModal(opt) {
  modal.style.display = "flex";
  btnAbrirModal.style.display = "none";

  if (opt === "info") {
    divManual.style.display = "block";
    divConcicao.style.display = "none";
  } else {
    divConcicao.style.display = "block";
    divManual.style.display = "none";
  }
}

function fecharModal() {
  modal.style.display = "none";
  btnAbrirModal.style.display = "block";
}

function montarModalInfo(modo) {
  const titulo = document.querySelector(".modal-manual > .modal-titulo");

  const ulModal = document.querySelector(".modal-manual > ul");

  if (modo === 1) {
    titulo.textContent = "DESCUBRA A PILHA";
    const liManual = document.querySelectorAll("#descubra ul li");
    ulModal.innerHTML = "";

    liManual.forEach((li) => {
      const liModal = document.createElement("li");
      if (
        li.textContent.includes("Pilha da esquerda") ||
        li.textContent.includes("Pilha da direita")
      ) {
        liModal.classList.add("decoracao");
      }

      liModal.textContent = li.textContent;
      ulModal.appendChild(liModal);
    });
  } else if (modo === 2) {
    titulo.textContent = "MONTE A PILHA";
    const liManual = document.querySelectorAll("#monte ul li");
    ulModal.innerHTML = "";

    liManual.forEach((li) => {
      const liModal = document.createElement("li");
      liModal.textContent = li.textContent;
      ulModal.appendChild(liModal);
    });
  }
}

function montarAlternativas(regraCorreta) {
  divAlternativas.innerHTML = "";

  const alternativas = gerarAlternativas(regraCorreta);

  alternativas.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;

    btn.onclick = () => {
      if (opcao === regraCorreta.condicao) {
        alert("✅ Resposta correta!");
        iniciarRodada(1);
      } else {
        alert("❌ Tente novamente!");
      }

      fecharModal();
    };

    divAlternativas.appendChild(btn);
  });
}

function montarModalCondicao(modo, regra) {
  const titulo = document.querySelector(".modal-condicao > .modal-titulo");

  if (modo === 1) {
    titulo.textContent = "Qual foi a lógica usada?";
    montarAlternativas(regra);
  } else if (modo === 2) {
    divAlternativas.innerHTML = "";
    titulo.textContent = `👉 Sua lógica é: ${regra.condicao}`;
  }
}

function validarSeparacao() {
  const imgsPrincipal = Array.from(pilhaPrincipal.querySelectorAll("img"));
  const idsPrincipal = imgsPrincipal.map((i) => i.id);

  const acertou = checarSeparacao(idsPrincipal, imagensOriginais);

  if (acertou) {
    alert("🎉 Você acertou a separação!");
    iniciarRodada(2);
    abrirModal();
  } else {
    alert("❌ Separação incorreta, tente de novo.");
  }
}

function montarTelaJogo(modo) {
  const tela = document.getElementById("telaJogo");
  tela.style.display = "flex";

  const titulo = document.querySelector("#telaJogo > .titulo");
  const instrucao = document.querySelector("#telaJogo > .instrucao");
  const btnVoltar = document.querySelector("#telaJogo > .btn-voltar-inicio");
  const btnInfo = document.querySelector("#telaJogo > .btn-info");
  const btn = document.querySelector("#telaJogo > .btn-responder");

  btnVoltar.onclick = voltarInicio;
  btnInfo.onclick = () => abrirModal("info");

  if (modo == 1) {
    titulo.textContent = "Descubra a Pilha";
    instrucao.textContent =
      "Observe como as figuras foram separadas e tente adivinhar a lógica usada na pilha esquerda!";
    btn.textContent = "Responder";
    btn.onclick = () => abrirModal("condicao");
  } else {
    titulo.textContent = "Monte a Pilha";
    instrucao.textContent =
      "Mova as figuras para a pilha da esquerda conforme a lógica!";
    btn.textContent = "Verificar";
    btn.onclick = validarSeparacao;

    abrirModal("condicao");
  }

  montarModalInfo(modo);
}

btnFecharModal.onclick = fecharModal;

btnAbrirModal.onclick = () => abrirModal();

window.onclick = (e) => {
  if (e.target === modal) fecharModal();
};

const pilhaPrincipal = document.getElementById("principal");
const pilhaSecundaria = document.getElementById("secundaria");
const imagensOriginais = [];

document.querySelectorAll("#secundaria img").forEach((img) => {
  imagensOriginais.push({ id: img.id, src: img.src, className: img.className });
});

function limparPilhas() {
  pilhaPrincipal.innerHTML = "";
  pilhaSecundaria.innerHTML = "";

  imagensOriginais.forEach((dados) => {
    let img = document.createElement("img");
    img.src = dados.src;
    img.id = dados.id;
    img.className = dados.className;
    img.draggable = true;

    pilhaSecundaria.appendChild(img);
  });
}

function iniciarRodada(modo) {
  limparPilhas();

  const regraAtual = selecionarRegra();

  if (modo === 1) {
    const imgs = Array.from(pilhaSecundaria.querySelectorAll("img"));

    imgs.forEach((img) => {
      if (regraAtual.filtro(img)) {
        pilhaPrincipal.appendChild(img);
      }
    });

    btnAbrirModal.style.display = "block";
  } else {
    btnAbrirModal.style.display = "block";

    inicializarArrastar();
  }

  montarModalCondicao(modo, regraAtual);
}

function efeitoSonoroClick(caminhoSom) {
  const audio = new Audio(caminhoSom);
  audio.play();
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    efeitoSonoroClick("public/assets/sounds/sound-5.mp3");
  });
});

const player = document.querySelector("#player");
player.volume = 0.1;

const btnPlayPause = document.querySelector(".btn-play-pause");
btnPlayPause.addEventListener("click", () => {
  if (player.paused) {
    player.play();
    btnPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    player.pause();
    btnPlayPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});

export {
  esconderTela,
  montarTelaManual,
  montarTelaDificuldade,
  salvarDificuldade,
  montarTelaJogo,
  iniciarRodada,
};
