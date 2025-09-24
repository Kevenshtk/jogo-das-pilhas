import {
  regrasIgual,
  regrasMaiorMenor,
  regrasEigual,
  regrasOuIgual,
  regrasEouMaiorMenor,
} from "./model/regras.js";

let regraAtual = null;

// ---------- Arrastar imagens controle ----------
let draggedItem = null;

function inicializarDragAndDrop() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragend", dragEnd);
  });

  [pilhaPrincipal, pilhaSecundaria].forEach((pilha) => {
    pilha.addEventListener("dragover", dragOver);
    pilha.addEventListener("dragenter", dragEnter);
    pilha.addEventListener("dragleave", dragLeave);
    pilha.addEventListener("drop", drop);
  });
}

function dragStart(e) {
  draggedItem = e.target;
  draggedItem.classList.add("dragging");
}

function dragEnd(e) {
  draggedItem.classList.remove("dragging");
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function drop(e) {
  this.classList.remove("over");
  if (draggedItem) {
    this.appendChild(draggedItem);
  }
}

function validarSeparacao() {
  const imgsPrincipal = Array.from(pilhaPrincipal.querySelectorAll("img"));
  const imgsSecundaria = Array.from(pilhaSecundaria.querySelectorAll("img"));

  const corretos = imagensOriginais.filter((d) =>
    regraAtual.filtro({
      id: d.id,
      classList: { contains: (cls) => d.className.includes(cls) },
    })
  );
  const idsCorretos = corretos.map((c) => c.id);

  const idsPrincipal = imgsPrincipal.map((i) => i.id);

  const acertou =
    idsPrincipal.length === idsCorretos.length &&
    idsPrincipal.every((id) => idsCorretos.includes(id));

  if (acertou) {
    alert("🎉 Você acertou a separação!");
    iniciarRodada(2);
    abrirModal();
  } else {
    alert("❌ Separação incorreta, tente de novo.");
  }
}

// ---------- Modal controle ----------
const modal = document.getElementById("modal");
const divManual = document.querySelector(".modal-manual");
const divConcicao = document.querySelector(".modal-condicao");
const divAlternativas = document.querySelector(".alternativas");
const btnAbrirModal = document.querySelector(".btn-abrir-modal");
const btnFecharModal = document.querySelector(".btn-fechar-modal");

function fecharModal() {
  modal.style.display = "none";
  btnAbrirModal.style.display = "block";
}

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

function gerarAlternativas(regraCorreta) {
  const regrasNivelSelecionado = getRegras(nivelSelecionado);
  divAlternativas.innerHTML = "";

  let alternativas = [regraCorreta.condicao];

  while (alternativas.length < 4) {
    let r = regrasNivelSelecionado[Math.floor(Math.random() * regrasNivelSelecionado.length)].condicao;
    if (!alternativas.includes(r)) alternativas.push(r);
  }

  alternativas.sort(() => Math.random() - 0.5);

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

function montarModalConcicao(modo, regra) {
  const titulo = document.querySelector(".modal-condicao > .modal-titulo");

  if (modo === 1) {
    titulo.textContent = "Qual foi a lógica usada?";
    gerarAlternativas(regra);
  } else if (modo === 2) {
    divAlternativas.innerHTML = "";
    titulo.textContent = `👉 Sua lógica é: ${regra.condicao}`;
  }
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

btnFecharModal.onclick = fecharModal;

btnAbrirModal.onclick = () => abrirModal();

window.onclick = (e) => {
  if (e.target === modal) fecharModal();
};

// ---------- Pilhas controle ----------
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

function getRegras(nivel) {
  switch (nivel) {
    case 0:
      let regrasLivre = [...regrasIgual, ...regrasMaiorMenor, ...regrasEigual, ...regrasOuIgual, ...regrasEouMaiorMenor];
      return regrasLivre;
      break;
    case 1:
      return regrasIgual;
      break;
    case 2:
      return regrasMaiorMenor;
      break;
    case 3:
      return regrasEigual;
      break;
    case 4:
      return regrasOuIgual;
      break;
    case 5:
      return regrasEouMaiorMenor;
      break;
  }
}

function iniciarRodada(modo) {
  limparPilhas();

  const regrasNivelSelecionado = getRegras(nivelSelecionado);

  regraAtual = regrasNivelSelecionado[Math.floor(Math.random() * regrasNivelSelecionado.length)];

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

    inicializarDragAndDrop();
  }

  montarModalConcicao(modo, regraAtual);
}

// ---------- Telas controle ----------
function esconderTelaInicial() {
  const tela = document.getElementById("telaInicio");
  tela.style.display = "none";
}

function voltarInicio() {
  const telaInicio = document.getElementById("telaInicio");
  const telaJogo = document.getElementById("telaJogo");
  const telaManual = document.getElementById("telaManual");
  telaInicio.style.display = "flex";
  telaJogo.style.display = "none";
  telaManual.style.display = "none";
}

function montarTelaManual() {
  esconderTelaInicial();
  const tela = document.getElementById("telaManual");
  tela.style.display = "flex";

  const btnVoltar = document.querySelector("#telaManual > .btn-voltar-inicio");
  btnVoltar.onclick = voltarInicio;
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

// ---------- Dificuldade controle ----------
let nivelAnterior = 0;
let nivelSelecionado;
const btnJogar = document.querySelector("#telaDificuldade > .btn-jogar");

function esconderTelaDificuldade() {
  const tela = document.getElementById("telaDificuldade");
  tela.style.display = "none";
}

function salvarDificuldade(nivel) {
  nivelSelecionado = nivel;

  alterarLegendaDificuldade(nivel);
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

  if (nivel !== nivelAnterior) {
    const btnAnterior = document.getElementById(`nivel-${nivelAnterior}`);
    btnAnterior.style.color = "#ffff";
    nivelAnterior = nivel;
  }

  const titulo = document.querySelector(".info > .info-titulo");
  const desc = document.querySelector(".info > .info-desc");
  const btn = document.getElementById(`nivel-${nivel}`);
  btn.style.color = "#01883eff";

  titulo.textContent = info[nivel].titulo;
  desc.textContent = info[nivel].desc;
}

function montarTelaDificuldade(modo) {
  const tela = document.getElementById("telaDificuldade");
  tela.style.display = "flex";

  const titulo = document.querySelector("#telaDificuldade > .titulo");
  titulo.textContent = modo === 1 ? "Descubra a Pilha" : "Monte a Pilha";
}

salvarDificuldade(0);

function iniciarJogo(modo) {
  esconderTelaInicial();
  montarTelaDificuldade(modo);

  btnJogar.onclick = () => {
    esconderTelaDificuldade();
    montarTelaJogo(modo);
    iniciarRodada(modo);
  };
}

window.iniciarJogo = iniciarJogo;
window.salvarDificuldade = salvarDificuldade;
window.montarTelaManual = montarTelaManual;
window.abrirModal = abrirModal;