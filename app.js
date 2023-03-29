const team = {
  _players: [
    {firstName:'Stephen', lastName:'Curry', age:'30'},
    {firstName:'Jordan', lastName:'Poole', age:20},
    {firstName:'Draymond', lastName:'Green', age:35}
    ],
  _games: [
    {opponent:'Cavaliers', teamPoints:109, opponentPoints:100},
    {opponent:'Mavericks', teamPoints:110, opponentPoints:100},
    {opponent:'Celtics', teamPoints:108, opponentPoints:107}
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
    };
    this._games.push(game);
  }


};
team.addPlayer('Bugs','Bunny', 76);
//console.log(team._players);
team.addGame('Titans', 100, 98);
console.log(team._games);
