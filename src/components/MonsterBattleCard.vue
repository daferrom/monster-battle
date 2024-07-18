<template>
  <div>
    <v-card class="battle-card-player centralized">
      <div v-if="!emptyStateText">
        <img class="card-image" :src="monster.imageUrl" alt="" />
        <p class="title">{{ title }}</p>
        <div class="skill-container">
          <p class="skill-text">HP</p>
          <div class="progress-container">
            <div
              class="progress-bar"
              :style="{ width: healthPoints + '%' }"
            ></div>
          </div>
          <p class="skill-text">Attack</p>
          <div class="progress-container">
            <div
              class="progress-bar"
              :style="{ width: attackPoints + '%' }"
            ></div>
          </div>
          <p class="skill-text">Defense</p>
          <div class="progress-container">
            <div
              class="progress-bar"
              :style="{ width: defensePoints + '%' }"
            ></div>
          </div>
          <p class="skill-text">Speed</p>
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: speedPoints + '%' }">
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else class="empty-state-container">
        <p>{{ title }}</p>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MonsterBattleCard",
  props: {
    title: {
      type: String,
      required: false,
    },
    monster: {
      type: Object,
    },
  },
  computed: {
    emptyStateText(): boolean {
      return this.title === "Player" || this.title === "Computer";
    },
    healthPoints(): number {
      return this?.monster?.hp || 0;
    },
    attackPoints(): number {
      return this?.monster?.attack || 0;
    },
    defensePoints(): number {
      return this?.monster?.defense || 0;
    },
    speedPoints(): number {
      return this?.monster?.speed || 0;
    },
    imageUrl(): string {
      return this?.monster?.imageUrl || "";
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.battle-card-player {
  padding: 13px 11px;
  height: 415px;
  min-width: 305px;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: $box-shadow;
}

.empty-state-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
}
.card-image {
  height: 178px;
  width: 283px;
  border-radius: 7px;
}

.centralized {
  display: flex;
  // align-items: center;
  justify-content: center;
}

.title {
  // display: flex;
  // // align-items: start;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 42px;
  border-bottom: 1px solid rgba(255, 0, 0, 0.1);
}

.skill-text {
  margin-top: 11px;
  font-size: 12px;
  margin-bottom: 5px;
}

/* Contenedor de la barra de progreso */
.progress-container {
  height: 8px;
  width: 100%;
  background-color: #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
}

/* Barra de progreso */
.progress-bar {
  width: 30%;
  height: 30px;
  background-color: #00ff00;
  line-height: 30px; /* Centra el texto verticalmente */
  color: white;
  border-radius: 4px;
  z-index: 1;
}
</style>
