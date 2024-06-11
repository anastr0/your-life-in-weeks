<template>
  <div class="h-screen flex flex-col justify-center">
    <UContainer class="font-mono text-slate-400 hover:text-slate-300">
      <div>
        <UCard :ui="{
            body: { padding: 'px-2 py-2 sm:p-2' },
            header: { padding: 'px-2 py-2 sm:px-2' },
          }">
          <template #header>
            <h3 class="text-xl font-bold text-center pt-2">
              Your life in Weeks
            </h3>
            <p class="text-center py-3">
              Inspired from the
              <a class="text-rose-400 hover:text-rose-500 after:content-['_↗'] ..."
                href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">wait but why article</a>
            </p>
            <UCard class="dob-picker-card" :ui="{ body: { padding: 'px-2 py-3 sm:p-3' } }">
              <div class="w-full inline-flex justify-center space-x-3">
                <VueDatePicker class="!w-fit" v-model="date" :enable-time-picker="false" :offset="0"
                  :text-input="{ format: 'dd.MM.yyyy', enterSubmit: true, rangeSeparator: '/'}" hide-input-icon dark
                  placeholder="DOB (DD/MM/YYYY)" auto-apply />
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

