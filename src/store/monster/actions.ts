import { ActionTree } from "vuex";
import { Monster, MonsterState } from "@/models/interfaces/monster.interface";
import { MonsterService } from "@/services/monsters.service";
import { RootState } from "../types";
import { constants } from "@/constants/constants";

export const actions: ActionTree<MonsterState, RootState> = {
  loadMonsters({ commit }): void {
    MonsterService.getAll().then((resp: Monster[]) => {
      commit(constants.LOAD_MONSTERS, resp);
    });
  },
  selectedMonsterById({ commit }, id: string): void {
    commit(constants.SELECT_MONSTERS_BY_ID, id);
  },
  selectedMonster({ commit }, monster: Monster): void {
    commit(constants.SELECT_MONSTERS, monster);
  },
  selectComputerMonster({ commit }, monster: Monster): void {
    console.log("monster", monster);
    commit(constants.SELECT_PC_MONSTER, monster);
  },
  calculateWinner({ commit }, params: any): void {
    console.log("PARAMS", params);
    MonsterService.getWinner(params[0], params[1]).then((resp: any) => {
      commit(constants.SET_WINNER, resp);
    });
  },
};
