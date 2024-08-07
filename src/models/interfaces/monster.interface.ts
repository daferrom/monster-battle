export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface Winner {
  name: string;
}

export interface MonsterState {
  monsters: Monster[];
  selectedMonsterId: string | undefined;
  selectedMonster: Monster | undefined;
  selectedMonsterByPC: Monster | undefined;
  winner: Winner | undefined;
}
