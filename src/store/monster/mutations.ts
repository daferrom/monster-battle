import { MutationTree } from "vuex";
import { Monster, MonsterState } from "@/models/interfaces/monster.interface";

export const mutations: MutationTree<MonsterState> = {
  setMonsters(state, payload: Monster[]) {
    state.monsters = payload;
  },
  setSelectedMonsterId(state, id: string) {
    state.selectedMonsterId = id;
  },
  setSelectedMonster(state, monster: Monster) {
    state.selectedMonster = monster;
  },
  setSelectedMonsterByPC(state, monster: Monster) {
    debugger;
    const listNotSelectedMonster = state.monsters.filter(
      (m) => m.id !== monster.id
    );
    const randomIndex = Math.floor(
      Math.random() * listNotSelectedMonster.length
    );
    state.selectedMonsterByPC = listNotSelectedMonster[randomIndex];
  },
  setWinner(state, resp: any) {
    const isATie = resp.tie;
    if (!isATie) {
      state.winner = resp.winner;
    } else {
      state.winner = undefined;
    }
  },
};
