<template>
  <div>
    <div class="app-container">
      <div class="wrapper-container">
        <h1>Your life in Weeks</h1>
        <div class="grid-container">
          <div ref="life" class="life-grid">
            <div
              v-for="(r, i) in lifeGrid[0]"
              :key="`r${lifeGrid[0] * (i + 1)}`"
              class="life-row"
            >
              <div
                v-for="(v, j) in lifeGrid[1]"
                :key="`r${lifeGrid[0] * (i + 1) + (j + 1)}`"
                class="week-dot"
                v-bind:style="[
                  lifeGrid[1] * i + (j + 1) > lifeExpectancy - weeksLeft
                    ? { background: 'red' }
                    : { background: 'grey' },
                ]"
              ></div>
            </div>
          </div>
          <!-- grid past days in grey, future days in red, today -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

var lifeGrid = [50, 100];
var lifeExpectancy = 0; // in weeks
var weeksLeft = 0;

const loadLifeGrid = function () {
  console.log("life grid loaded from localstorage");
  lifeGrid = [50, 100];
  lifeExpectancy = lifeGrid[0] * lifeGrid[1];
  weeksLeft = 4510;
};

onBeforeMount(() => {
  loadLifeGrid();
});
</script>

<style lang="scss">
.grid-container {
  align-self: center;
  .life-grid {
    width: fit-content;
  }
  .life-row {
    line-height: 0;
  }
  .week-dot {
    line-height: 0;
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.1rem;
    display: inline-flex;
    flex-direction: column;
  }
}
h1 {
  align-self: center;
}
</style>
