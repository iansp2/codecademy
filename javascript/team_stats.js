const team = {
  _players: [
    { firstName: "ian", lastName: "pisano", age: 21 },
    { firstName: "claudia", lastName: "trespa", age: 22 },
    { firstName: "antonia", lastName: "vega", age: 2 },
  ],
  _games: [
    { opponent: 'Flamengo', teamPoints:3, opponentPoints:1 },
    { opponent: 'Fluminense', teamPoints:2, opponentPoints:0 },
    { opponent: 'Botafogo', teamPoints:4, opponentPoints:3 }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Vasco', 7, 2);
console.log(team.games);