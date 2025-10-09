import {
  regrasIgual,
  regrasMaiorMenor,
  regrasEigual,
  regrasOuIgual,
  regrasEouMaiorMenor,
} from "../model/regras.js";

let regraAtual = null;

let nivelAnterior = 0;
let nivelSelecionado;

let mododejogo = 0;

function getMododejogo() {
  return mododejogo;
}

function setMododejogo(modo) {
  mododejogo = modo;
}

function getRegras(nivel) {
  switch (nivel) {
    case 0:
      let regrasLivre = [
        ...regrasIgual,
        ...regrasMaiorMenor,
        ...regrasEigual,
        ...regrasOuIgual,
        ...regrasEouMaiorMenor,
      ];
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

function getRegraAtual() {
  return regraAtual;
}

function gerarAlternativas(regraCorreta) {
  const regrasNivelSelecionado = getRegras(nivelSelecionado);

  let alternativas = [regraCorreta.condicao];

  while (alternativas.length < 4) {
    let r =
      regrasNivelSelecionado[
        Math.floor(Math.random() * regrasNivelSelecionado.length)
      ].condicao;
    if (!alternativas.includes(r)) alternativas.push(r);
  }

  alternativas.sort(() => Math.random() - 0.5);

  return alternativas;
}

function selecionarRegra() {
  const regrasNivelSelecionado = getRegras(nivelSelecionado);

  regraAtual =
    regrasNivelSelecionado[
      Math.floor(Math.random() * regrasNivelSelecionado.length)
    ];

  return regraAtual;
}

function getNivelDificuldadeAnterior() {
  return nivelAnterior;
}

function setNivelDificuldadeAnterior(nivel) {
  nivelAnterior = nivel;
}

function getNivelDificuldade() {
  return nivelSelecionado;
}

function setNivelDificuldade(nivel) {
  nivelSelecionado = nivel;
}

function checarSeparacao(resposta, imagensOriginais) {
  const regraAtual = getRegraAtual();

  const corretos = imagensOriginais.filter((d) =>
    regraAtual.filtro({
      id: d.id,
      classList: { contains: (cls) => d.className.includes(cls) },
    })
  );
  const idsCorretos = corretos.map((c) => c.id);

  const acertou =
    resposta.length === idsCorretos.length &&
    resposta.every((id) => idsCorretos.includes(id));

  return acertou;
}

export {
  getMododejogo,
  setMododejogo,
  getNivelDificuldadeAnterior,
  setNivelDificuldadeAnterior,
  getNivelDificuldade,
  setNivelDificuldade,
  selecionarRegra,
  gerarAlternativas,
  getRegraAtual,
  checarSeparacao,
};
