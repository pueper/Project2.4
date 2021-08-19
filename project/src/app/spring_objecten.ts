export interface User {
  id: number;
  name: string;
  password: string;
  age: number;
  games: Game[];
  scores: Array<Topscore>;
}

export interface Game {
	id: number;
	name: string;
	scores: Array<Topscore>;
}

export interface Topscore {
	id: number;
	user: User;
	game: Game;
	score: number;
}
