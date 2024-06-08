<template>
  <div>
    <!-- <h1 style="align: center;">Your life in Weeks</h1>

    <div>Input DOB (datetime picker)</div>
    <div>input life expectancy (multiples of grid width)</div> -->

    <div>
      <div class="container">
        <div ref="life" class="life-grid">
          <div
            v-for="(r, i) in lifeGrid[0]"
            :key="`r${lifeGrid[0] * i}`"
            class="life-row"
          >
            <div
              v-for="(v, j) in lifeGrid[1]"
              :key="lifeGrid[0] * i + j"
              class="dot"
              v-bind:style="[lifeGrid[0] * i + j > (lifeExpectancy - daysLeft) ? { background: 'red' }: { background: 'grey' }]"></div>
          </div>
        </div>
        <!-- grid past days in grey, future days in red, today -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

var lifeGrid = [50, 100];
var lifeExpectancy = 0; // in weeks
var weeksLeft = 0;

const setDoB = function () {
  console.log("dob set")
}

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

<style>
.container {
  display: flex;
  justify-content: center;
}
.life-grid {
  width: fit-content;
}
.life-row {
  line-height: 0;
}
.dot {
  background: grey;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0.1rem;
  line-height: 0;
  display: inline-flex;
  flex-direction: column;
}
</style>
