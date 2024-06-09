<template>
  <div class="h-screen flex flex-col justify-center">
    <UContainer class="font-mono text-slate-400 hover:text-slate-300">
      <div>

        <UCard>
          <template #header>
            <h1 class="text-xl font-bold text-center">Your life in Weeks</h1>
            <p class="text-center p-4">
              Inspired from the <a class="text-rose-400 hover:text-rose-500 after:content-['_↗'] ..."
                href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">wait but why article</a>
            </p>
            <UCard class="dob-picker-card">
              <div class="w-full inline-flex justify-center space-x-3">
                <VueDatePicker class="!w-fit" v-model="date" :enable-time-picker="false" :offset="0" hide-input-icon />
              </div>
            </UCard>
            
          </template>
          <template #footer>
            <!-- <Placeholder class="h-8" /> -->
            <h3>{{ date && date || "__-__-____" }}</h3>
          </template>
        </UCard>
        <!-- <button @click="dob=2"></button> -->

      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';

const appConfig = useAppConfig();

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
$default-backdrop-blur: blur(24px);
$default-backdrop-blur-bg: rgba(255, 255, 255, 0.867);
$default-border-radius: 0.375rem;

// date picker styles
.dob-picker-card {
  .dp__input_wrap {
    background-color:  $default-backdrop-blur-bg !important;
  }
  .dp__overlay,
  .dp__menu {
    --tw-backdrop-blur:  $default-backdrop-blur !important;
    background-color: $default-backdrop-blur-bg !important;
  }
  .dp__arrow_top {
    display: none;
  }
  .dp__input_wrap {
    border-radius: $default-border-radius !important;
  }
}

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
