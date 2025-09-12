const regrasIgual = [
  {
    condicao: "Número igual a impar",
    filtro: (img) => img.classList.contains("num-impar"),
  },
  {
    condicao: "Forma igual a triângulo",
    filtro: (img) => img.classList.contains("triangulo"),
  },
  {
    condicao: "Cor igual a azul",
    filtro: (img) => img.classList.contains("azul"),
  },
  {
    condicao: "Escrita igual a cor branca",
    filtro: (img) => img.classList.contains("txt-branco"),
  },
  {
    condicao: "Forma igual a círculo",
    filtro: (img) => img.classList.contains("circulo"),
  },
  {
    condicao: "Cor igual a vermelho",
    filtro: (img) => img.classList.contains("vermelho"),
  },
  {
    condicao: "Sublinhado igual a linha contínua",
    filtro: (img) => img.classList.contains("continuo"),
  },
  {
    condicao: "Forma igual a pentágono",
    filtro: (img) => img.classList.contains("pentagono"),
  },
  {
    condicao: "Cor igual a verde",
    filtro: (img) => img.classList.contains("verde"),
  },
  {
    condicao: "Número igual a par",
    filtro: (img) => img.classList.contains("num-par"),
  },
  {
    condicao: "Forma igual a quadrado",
    filtro: (img) => img.classList.contains("quadrado"),
  },
  {
    condicao: "Cor igual a amarelo",
    filtro: (img) => img.classList.contains("amarelo"),
  },
  {
    condicao: "Forma igual 4 lados",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("losango"),
  },
  {
    condicao: "Forma igual a hexágono",
    filtro: (img) => img.classList.contains("hexagono"),
  },
  {
    condicao: "Cor igual a rosa",
    filtro: (img) => img.classList.contains("rosa"),
  },
  {
    condicao: "Escrita igual a cor preta",
    filtro: (img) => img.classList.contains("txt-preto"),
  },
  {
    condicao: "Forma igual a losango",
    filtro: (img) => img.classList.contains("losango"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada",
    filtro: (img) => img.classList.contains("potilhado"),
  },
];

const regrasMaiorMenor = [
  {
    condicao: "Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango"),
  },
  {
    condicao: "Número menor que 17",
    filtro: (img) => parseInt(img.id) < 17,
  },
  {
    condicao: "Número maior que 15",
    filtro: (img) => parseInt(img.id) > 15,
  },
  {
    condicao: "Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("triangulo"),
  },
  {
    condicao: "Número maior que 19",
    filtro: (img) => parseInt(img.id) > 19,
  },
  {
    condicao: "Número menor que 10",
    filtro: (img) => parseInt(img.id) < 10,
  },
  {
    condicao: "Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("hexagono"),
  },
  {
    condicao: "Número menor que 13",
    filtro: (img) => parseInt(img.id) < 13,
  },
  {
    condicao: "Número maior que 10",
    filtro: (img) => parseInt(img.id) > 10,
  },
  {
    condicao: "Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango"),
  },
];

const regrasEigual = [
  {
    condicao: "Cor igual a azul E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a vermelho E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") &&
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a verde E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a amarelo E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a rosa E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") && img.classList.contains("rosa"),
  },
  {
    condicao: "Número igual a par E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") && img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") && img.classList.contains("num-par"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") &&
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") && img.classList.contains("continuo"),
  },
  {
    condicao: "Número igual a impar E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") &&
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") &&
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar E Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") && img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar E Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") &&
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") &&
      img.classList.contains("potilhado"),
  },
  {
    condicao:
      "Sublinhado igual a linha pontilhada E Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") && img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") &&
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") && img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") &&
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") && img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") && img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") &&
      img.classList.contains("txt-branco"),
  },
];

const regrasOuIgual = [
  {
    condicao: "Cor igual a azul OU Cor igual a verde",
    filtro: (img) =>
      img.classList.contains("azul") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a rosa OU Cor igual a azul",
    filtro: (img) =>
      img.classList.contains("azul") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a vermelho OU Cor igual a amarelo",
    filtro: (img) =>
      img.classList.contains("vermelho") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a verde OU Cor igual a amarelo",
    filtro: (img) =>
      img.classList.contains("verde") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Cor igual a rosa",
    filtro: (img) =>
      img.classList.contains("amarelo") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a azul OU Cor igual a vermelho",
    filtro: (img) =>
      img.classList.contains("azul") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a amarelo OU Cor igual a azul",
    filtro: (img) =>
      img.classList.contains("azul") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a vermelho OU Cor igual a verde",
    filtro: (img) =>
      img.classList.contains("vermelho") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a rosa OU Cor igual a vermelho",
    filtro: (img) =>
      img.classList.contains("vermelho") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a verde OU Cor igual a rosa",
    filtro: (img) =>
      img.classList.contains("verde") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a azul OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") ||
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a verde OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a rosa OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Número igual a par",
    filtro: (img) =>
      img.classList.contains("num-par") || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Número igual a impar",
    filtro: (img) =>
      img.classList.contains("num-impar") || img.classList.contains("rosa"),
  },
  {
    condicao: "Número igual a par OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a par OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") || img.classList.contains("num-par"),
  },
  {
    condicao: "Número igual a impar OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") ||
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") ||
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") ||
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar OU Sublinhado igual a linha contínua",
    filtro: (img) =>
      img.classList.contains("continuo") || img.classList.contains("num-impar"),
  },
  {
    condicao: "Número igual a impar OU Sublinhado igual a linha pontilhada",
    filtro: (img) =>
      img.classList.contains("potilhado") ||
      img.classList.contains("num-impar"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") ||
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao:
      "Sublinhado igual a linha pontilhada OU Escrita igual a cor branca",
    filtro: (img) =>
      img.classList.contains("txt-branco") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao:
      "Sublinhado igual a linha pontilhada OU Escrita igual a cor preta",
    filtro: (img) =>
      img.classList.contains("txt-preto") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") || img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") || img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") ||
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma igual a círculo",
    filtro: (img) =>
      img.classList.contains("circulo") || img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma igual a quadrado",
    filtro: (img) =>
      img.classList.contains("quadrado") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma igual a pentágono",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma igual a hexágono",
    filtro: (img) =>
      img.classList.contains("hexagono") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma igual a losango",
    filtro: (img) =>
      img.classList.contains("losango") || img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma igual a triângulo",
    filtro: (img) =>
      img.classList.contains("triangulo") ||
      img.classList.contains("txt-branco"),
  },
];

const regrasEouMaiorMenor = [
  {
    condicao: "Cor igual a azul OU Número maior que 12",
    filtro: (img) => parseInt(img.id) > 12 || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Número menor que 16",
    filtro: (img) => parseInt(img.id) < 16 || img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a vermelho OU Número maior que 13",
    filtro: (img) =>
      parseInt(img.id) > 13 || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Número menor que 15",
    filtro: (img) =>
      parseInt(img.id) < 15 || img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a verde OU Número maior que 14",
    filtro: (img) => parseInt(img.id) > 14 || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Número menor que 17",
    filtro: (img) => parseInt(img.id) < 17 || img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a amarelo OU Número maior que 11",
    filtro: (img) => parseInt(img.id) > 11 || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Número menor que 14",
    filtro: (img) => parseInt(img.id) < 14 || img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a rosa OU Número maior que 20",
    filtro: (img) => parseInt(img.id) > 20 || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Número menor que 19",
    filtro: (img) => parseInt(img.id) < 19 || img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a azul OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a verde OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a rosa OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("rosa"),
  },
  {
    condicao: "Escrita igual a cor branca OU Número maior que 10",
    filtro: (img) =>
      parseInt(img.id) > 10 || img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Número menor que 17",
    filtro: (img) =>
      parseInt(img.id) < 17 || img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor preta OU Número maior que 12",
    filtro: (img) =>
      parseInt(img.id) > 12 || img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Número menor que 14",
    filtro: (img) =>
      parseInt(img.id) < 14 || img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Número maior que 13",
    filtro: (img) =>
      parseInt(img.id) > 13 || img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Número menor que 10",
    filtro: (img) =>
      parseInt(img.id) < 10 || img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Número maior que 16",
    filtro: (img) =>
      parseInt(img.id) > 16 || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Número menor que 9",
    filtro: (img) => parseInt(img.id) < 9 || img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma menor que 4 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma menor que 5 lados",
    filtro: (img) =>
      img.classList.contains("circulo") ||
      img.classList.contains("triangulo") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma maior que 4 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua OU Forma maior que 3 lados",
    filtro: (img) =>
      img.classList.contains("pentagono") ||
      img.classList.contains("hexagono") ||
      img.classList.contains("quadrado") ||
      img.classList.contains("losango") ||
      img.classList.contains("continuo"),
  },
  {
    condicao: "Cor igual a azul E Número maior que 15",
    filtro: (img) => parseInt(img.id) > 15 && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Número menor que 10",
    filtro: (img) => parseInt(img.id) < 10 && img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a vermelho E Número maior que 14",
    filtro: (img) =>
      parseInt(img.id) > 14 && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Número menor que 11",
    filtro: (img) =>
      parseInt(img.id) < 11 && img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a verde E Número maior que 16",
    filtro: (img) => parseInt(img.id) > 16 && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Número menor que 9",
    filtro: (img) => parseInt(img.id) < 9 && img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a amarelo E Número maior que 17",
    filtro: (img) => parseInt(img.id) > 17 && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Número menor que 12",
    filtro: (img) => parseInt(img.id) < 12 && img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a rosa E Número maior que 13",
    filtro: (img) => parseInt(img.id) > 13 && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Número menor que 8",
    filtro: (img) => parseInt(img.id) < 8 && img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a azul E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a azul E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("azul"),
  },
  {
    condicao: "Cor igual a vermelho E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a vermelho E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("vermelho"),
  },
  {
    condicao: "Cor igual a verde E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a verde E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("verde"),
  },
  {
    condicao: "Cor igual a amarelo E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a amarelo E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("amarelo"),
  },
  {
    condicao: "Cor igual a rosa E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("rosa"),
  },
  {
    condicao: "Cor igual a rosa E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("rosa"),
  },
  {
    condicao: "Escrita igual a cor branca E Número maior que 16",
    filtro: (img) =>
      parseInt(img.id) > 16 && img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Número menor que 18",
    filtro: (img) =>
      parseInt(img.id) < 18 && img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor branca E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("txt-branco"),
  },
  {
    condicao: "Escrita igual a cor preta E Número maior que 19",
    filtro: (img) =>
      parseInt(img.id) > 19 && img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Número menor que 12",
    filtro: (img) =>
      parseInt(img.id) < 12 && img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Escrita igual a cor preta E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("txt-preto"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Número maior que 20",
    filtro: (img) =>
      parseInt(img.id) > 20 && img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Número menor que 16",
    filtro: (img) =>
      parseInt(img.id) < 16 && img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha pontilhada E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("potilhado"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Número maior que 13",
    filtro: (img) =>
      parseInt(img.id) > 13 && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Número menor que 17",
    filtro: (img) =>
      parseInt(img.id) < 17 && img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma menor que 4 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo")) &&
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma menor que 5 lados",
    filtro: (img) =>
      (img.classList.contains("circulo") ||
        img.classList.contains("triangulo") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma maior que 4 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono")) &&
      img.classList.contains("continuo"),
  },
  {
    condicao: "Sublinhado igual a linha contínua E Forma maior que 3 lados",
    filtro: (img) =>
      (img.classList.contains("pentagono") ||
        img.classList.contains("hexagono") ||
        img.classList.contains("quadrado") ||
        img.classList.contains("losango")) &&
      img.classList.contains("continuo"),
  },
];

export {
  regrasIgual,
  regrasMaiorMenor,
  regrasEigual,
  regrasOuIgual,
  regrasEouMaiorMenor,
};
