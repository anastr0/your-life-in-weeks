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
                <!-- TODO: set `:state="false"` if set date is today or future -->
                <UButton @click="setWeeksLeft()" icon="i-heroicons-arrow-path">calc life</UButton>
              </div>
            </UCard>
          </template>
          <UCard class="life-grid-card" v-if="lifeExpectancy !== 0">
            <div class="w-full flex flex-wrap" style="max-width: 90vw">
              <div 
                v-for="w in lifeExpectancy"
                :key="w"
                class="w-1 h-1 rounded-bl-sm m-[3px]"
                :class="(w < (lifeExpectancy - weeksLeft)) ? 'bg-gray-500' : 'bg-primary-500'"
              >
              </div>
            </div>
          </UCard>
          <template #footer>
            <h3>{{ date && date || "__-__-____" }}</h3>
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';

const appConfig = useAppConfig();
const date = ref(new Date());  // TODO: replace with date pulled from localstorage/ persisted memory

var lifeExpectancy = 0; // in weeks
var weeksLeft = 0;

const setWeeksLeft = function () {
  if (date.value) {
    // TODO: calc diff (today - dob) => no of weeks total
    // TODO: calc grid, lifeexpectancy
    lifeExpectancy = 5000;
    weeksLeft = 4510;
  }
}

const loadLifeGrid = function () {
  console.log("life grid loaded from localstorage");
  // TODO : set date to value in localstorage if exists
  if (date.value) { setWeeksLeft() }
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
</style>
