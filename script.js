var cartas = [
  {
    nome: "Draven",
    imagem:
      "https://cdn-lor.mobalytics.gg/production/images/set1/pt_br/img/card/game/01NX020.png",
    atributos: {
      poder: 3,
      vida: 2,
      mana: 3
    }
  },
  {
    nome: "Aphelios",
    imagem:
      "https://cdn-lor.mobalytics.gg/production/images/set3/pt_br/img/card/game/03MT217T13.png",
    atributos: {
      poder: 4,
      vida: 4,
      mana: 3
    }
  },
  {
    nome: "Kalista",
    imagem:
      "https://cdn-lor.mobalytics.gg/production/images/set1/pt_br/img/card/game/01SI030T2.png",
    atributos: {
      poder: 4,
      vida: 5,
      mana: 3
    }
  },
  {
    nome: "Miss Fortune",
    imagem:
      "https://runescola.com.br/wp-content/uploads/cards/img/pt_br/webp/02BW022.webp",
    atributos: {
      poder: 3,
      vida: 3,
      mana: 3
    }
  },
  {
    nome: "Lucian",
    imagem:
      "https://cdn-lor.mobalytics.gg/production/images/set1/pt_br/img/card/game/01DE022.png",
    atributos: {
      poder: 3,
      vida: 2,
      mana: 2
    }
  }
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  var CartaMaquinaRR = (document.getElementById("img-maquina").src =
    "https://i.postimg.cc/7LtHtmCp/cartadefault.png");

  exibirOpcoes();
  exibirCartaJogador();
}

function exibirCartaJogador() {
  var divCartaJogador = (document.getElementById("img-jogador").src =
    cartaJogador.imagem);
}

function exibirCartaMaquina() {
  var divCartaMaquina = (document.getElementById("img-maquina").src =
    cartaMaquina.imagem);
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      " checked />" +
      atributo.toUpperCase();
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var valorCJ = cartaJogador.atributos[atributoSelecionado];
  var valorCM = cartaMaquina.atributos[atributoSelecionado];
  var resultado = document.getElementById("resultado");

  if (valorCJ > valorCM) {
    resultado.innerHTML = "Você venceu!";
  } else if (valorCJ < valorCM) {
    resultado.innerHTML = "Você perdeu!";
  } else {
    resultado.innerHTML = "Empatou!";
  }

  exibirCartaMaquina();

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}