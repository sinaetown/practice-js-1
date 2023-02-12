const team = {
    _players: [
      { firstName: "Ben", lastName: "Park", age: 54 },
      { firstName: "Sinae", lastName: "Hong", age: 22 },
      { firstName: "Tom", lastName: "Hanks", age: 18 },
    ],
    _games: [
      { opponent: "Lions", teampoints: 30, opponentPoints: 17 },
      { opponent: "Tigers", teampoints: 25, opponentPoints: 19 },
      { opponent: "Eagles", teampoints: 10, opponentPoints: 56 },
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = { firstName : newFirstName, lastName : newLastName, age : newAge };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = { opponent : newOpponent, teamPoints : newTeamPoints, opponentPoints: newOpponentPoints };
      this._games.push(game);
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  
  team.addGame("Titans", 100, 98);
  console.log(team.games);