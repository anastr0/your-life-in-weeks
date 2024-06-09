<template>
  <div>
    <UContainer class="font-mono text-slate-400 hover:text-slate-300">
      <div>
        
         <UCard>
          <template #header>
            <h1 class="text-xl font-bold text-center">Your life in Weeks</h1>
            <p class="text-center p-4">
              Inspired from the <a class="text-rose-400 hover:text-rose-500 after:content-['_↗'] ..." href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">wait but why article</a>
            </p>
            <UCard>
              <UButton icon="i-heroicons-arrow-path">calc life</UButton>
            </UCard>
            
          </template>
          <template #footer>
            <!-- <Placeholder class="h-8" /> -->
            <h3>08-06-2024</h3>
          </template>
        </UCard>
        <!-- <button @click="dob=2"></button> -->

      </div>
    </UContainer>
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
