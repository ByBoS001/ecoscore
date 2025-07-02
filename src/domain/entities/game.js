export class Game {
  constructor({ teamA, teamB, scoreA = 0, scoreB = 0 }) {
    this.teamA = teamA;
    this.teamB = teamB;
    this.scoreA = scoreA;
    this.scoreB = scoreB;
  }
}