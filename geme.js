const configuracao = {                 
 type: phaser .AUTO,
 width: 640,
 heigit: 480,
 backgroundcolor: '#000000',
 physics:{
    default:`arcade`,
    arcade:{ debuy:false }
  },
  scene: {preload:precarregar,create:criar,update:atualiza}   
};
let jogador;
let teclas;
let paredes;
let inimigos;
let moedas;
let textoPontuacao;
let textoFimDeJogo;
let pontuacao = 0;
let jogoTerminou = false;
let velocidade = 160;

// Layout simples: 1 = parede, 0 = vazio
const mapa = [
  '1111111111111111',
  '1000000001000001',
  '1011110101011101',
  '1010000101000001',
  '1010111101110101',
  '1000100000010001',
  '1110101111101011',
  '1000101000001011',
  '1011101011101011',
  '1000000010000001',
  '1111111111111111'
];

const tamanhoBloco = 40;
function precarregar(){
  
}