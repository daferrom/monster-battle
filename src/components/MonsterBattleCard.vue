<template>
  <div>
    <v-card class="battle-card-player centralized">
      <img
        class="card-image"
        src="https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png"
        alt=""
      />
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
      required: true,
    },
  },
  computed: {
    healthPoints(): number {
      return this.monster.hp;
    },
    attackPoints(): number {
      return this.monster.attack;
    },
    defensePoints(): number {
      return this.monster.defense;
    },
    speedPoints(): number {
      return this.monster.speed;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.battle-card-player {
  padding: 13px 11px;
  height: 415px;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: $box-shadow;
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

.skill-container {
  margin-top: 11px;
}
.skill-text {
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
