class Game {
  constructor(){
    this.memoryPlayers = new Map();
    this.memoryMatchs = new Map();
    this.player1,
    this.player2,
    this.match = new Map();
  }
  
  // Método para adicionar um jogador e seu nome, seguido da escolha da jogada
  get playerNameAndMove(){
    alert('Este jogo está definido para ter 2 participantes')
    // Salva o nome dos jogadores
    let namePlayer1 = prompt('Insira o nome do Jogador 1: ');// DEIXAR OS LETS COMO CONST!!
    let namePlayer2 = prompt('Insira o nome do Jogador 2: ');
    // Salva a jogada dos jogadores
    let movePlayer1 = prompt(`${namePlayer1}, qual a sua jogada? Pedra, Papel ou Tesoura :`);
    let movePlayer2 = prompt(`${namePlayer2}, qual a sua jogada? Pedra, Papel ou Tesoura :`);

    //Cria o objeto Jogador e preenche os atributos do objeto jogador 1
    let player1 = new Player(namePlayer1);
    player1.playerId = 1;
    player1.move = movePlayer1;
    this.player1 = player1;
    
    //Cria o objeto Jogador e preenche os atributos do objeto jogador 2
    let player2 = new Player(namePlayer2);
    player2.playerId = 1;
    player2.move = movePlayer2;
    this.player2 = player2;

    // Salva os dados dos jogadores na memória
    this.memoryPlayers = [...this.memoryPlayers, player1, player2];
  };

  get newGame(){
    const message = 'O jogo Pedra, Papel e Tesoura é jogado com 2 jogadores';
    console.log(message);
    this.playerNameAndMove;
  }

  //recebe a jogada -> e envie pro jogo se não for empate
  get showMoves(){
    let match = new Map() 
      .set('optionPlayer1', this.memoryPlayers[0].move) //armazena a escolha do player1
      .set('optionPlayer2', this.memoryPlayers[1].move) // armazena a escolha do player2
    if (match.get('optionPlayer1') !== match.get('optionPlayer2')){
      this.match = match;
      console.log('Players moves are acepted - who wins?')    
    } else { // não permite empate
      return console.log('Draw or invalid choices - please repeat');
    }
  }
    // método que adiciona os dados quando o ganhador é o player 1
    get winnerPlayer1() {
        this.memoryPlayers[0].stats.Win += 1;
        this.memoryPlayers[0].stats.Played += 1;
        this.memoryPlayers[1].stats.Loss += 1;
        this.memoryPlayers[1].stats.Played += 1;
        let winnerMessage = `Vencedor: ${this.player1.name} : ${this.match.get("optionPlayer1")} ganha de ${this.match.get("optionPlayer2")}`;
        console.log(winnerMessage)
    // Guardar resultado da partida no memoryMatchs
      this.memoryMatchs = [...this.memoryMatchs, [winnerMessage]];


    };
    // método que adiciona os dados quando o ganhador é o player 2
     get winnerPlayer2() {
        this.memoryPlayers[1].stats.Win += 1;
        this.memoryPlayers[1].stats.Played += 1;
        this.memoryPlayers[0].stats.Loss += 1;
        this.memoryPlayers[0].stats.Played += 1;
        let winnerMessage = `Vencedor: ${this.player2.name} : ${this.match.get("optionPlayer2")} ganha de ${this.match.get("optionPlayer1")}`;
    // Guardar resultado da partida no memoryMatchs
       console.log(winnerMessage)
       this.memoryMatchs = [...this.memoryMatchs, winnerMessage];
    };

// método para verificar quem é o ganhador
  get verifyWinner() {
    let match = this.match;
  
    //Condições para ganhar, o terceiro indice indica quem ganhou a partida
    const conditionToWin = [ 
      ['papel', 'pedra', 1],
      ['papel', 'tesoura', 2],
      ['pedra', 'tesoura', 1],
      ['pedra', 'papel', 2],
      ['tesoura', 'papel', 1],
      ['tesoura', 'pedra', 2]
    ];
    
    // Verifica quem foi o ganhador da match
    for (let i =0; i < conditionToWin.length; i++) {
      if (match.get('optionPlayer1') === conditionToWin[i][0] && match.get('optionPlayer2') == conditionToWin[i][1]) {
        // o ternário chama o método ganhador
        conditionToWin[i][2] === 1 ? this.winnerPlayer1 : this.winnerPlayer2;
      };
    };
  }
}

//não alterar por enquanto - deixar algumas propriedades privadas
class Player {
  constructor(name) {
    this.name = name,
    this.playerId,
    this.move,
    this.stats = {
      'Win': 0,
      'Loss': 0,
      'Played': 0
    }
  }
  //escolhe jogada
  setMove(option){
    this.move = option
  }
}
/** Linhas abaixo são para rodar o jogo para teste */
// let jogo = new Game();
// jogo.newGame
// jogo.showMoves
// jogo.verifyWinner
// console.log(jogo.memoryMatchs)
// console.log(jogo.memoryPlayers)
