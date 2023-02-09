"use strict";

const copo = document.querySelector(".glass");
const titulo = document.querySelector('h2')
const selectDrink = document.querySelector("#ipesquisa");
const drinks = [
  {
    nome: "Tequila Sunrise",
    copo: "Regular",
    isAlcoolica: true,
    mlIngrediente1: 30,
    ingrediente1: "Curaçau Blue",
    mlIngrediente2: 30,
    ingrediente2: "Grenadine",
    mlIngrediente3: 40,
    ingrediente3: "Suco de Laranja",
    numIngredientes: 3,
  },
  {
    nome: "Lagoa Azul",
    copo: "Regular",
    isAlcoolica: true,
    mlIngrediente1: 30,
    ingrediente1: "Curaçau Blue",
    mlIngrediente2: 20,
    ingrediente2: "Suco de Limão",
    mlIngrediente3: 50,
    ingrediente3: "Soda Limonada",
    numIngredientes: 3,
  },
];

const corDrinks = {
  "Curaçau Blue": "#1111FF",
  Grenadine: "#FF1111",
  "Suco de Laranja": "orange",
  "Suco de Limão": "lime",
  "Soda Limonada": "green",
};

let capacidadeCopo = 200;

selectDrink.addEventListener("change", () => {
  limparCopo();
  let bebidaSelecionada = selectDrink.value;
  titulo.innerHTML = `Drink ${bebidaSelecionada}`
  console.log(bebidaSelecionada);
  drinks.forEach((bebida, idx) => {
    if (bebida.nome === bebidaSelecionada) {
      console.log(bebida.nome);
      let [igr1, igr2, igr3] = [
        bebida.ingrediente1,
        bebida.ingrediente2,
        bebida.ingrediente3,
      ];
      console.log(igr1, igr2, igr3);
      const corLayer1 = encontrarCor(igr1);
      const corLayer2 = encontrarCor(igr2);
      const corLayer3 = encontrarCor(igr3);
      console.log(corLayer1, corLayer2, corLayer3);
      let [tamanhoL1, tamanhol2, tamanhol3] = [
        calcularTamanhoL(bebida.mlIngrediente1),
        calcularTamanhoL(bebida.mlIngrediente2),
        calcularTamanhoL(bebida.mlIngrediente3),
      ];
      console.log(tamanhoL1, tamanhol2, tamanhol3);
      let layer1 = criarLayer(
        corLayer1,
        bebida.ingrediente1,
        bebida.mlIngrediente1,
        tamanhoL1
      );
      let layer2 = criarLayer(
        corLayer2,
        bebida.ingrediente2,
        bebida.mlIngrediente2,
        tamanhol2
      );
      let layer3 = criarLayer(
        corLayer3,
        bebida.ingrediente3,
        bebida.mlIngrediente3,
        tamanhol3
      );
      copo.insertAdjacentHTML("beforeend", layer1);
      copo.insertAdjacentHTML("beforeend", layer2);
      copo.insertAdjacentHTML("beforeend", layer3);
    }
  });
});

function encontrarCor(string) {
  for (const nome in corDrinks) {
    if (nome === string) {
      //   console.log(corDrinks[nome]);
      return corDrinks[nome];
    }
  }
}

function calcularTamanhoL(medida) {
  let tamanhoLayer;
  return (tamanhoLayer = (medida / capacidadeCopo) * 100);
}

function criarLayer(cor, ingrediente, ml, tamanho) {
  let layer = `<div class="layer" style='background-color:${cor}; height:${tamanho}%'><span class="desc--layer">${ml} ml ${ingrediente}</span></div>`;
  return layer;
}

function limparCopo() {
  const remover = document.querySelectorAll(".layer");
  remover.forEach((el) => {
    el.remove();
  });
}
