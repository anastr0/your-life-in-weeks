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
                  placeholder="DOB (DD/MM/YYYY)" auto-apply :model-value="date"/>
              </div>
            </UCard>
          </template>
          <UCard class="life-grid-card">
            <div class="w-full flex flex-wrap" style="max-width: 95vw">
              <div v-for="w in lifeExpectancy" :key="w" class="w-1 h-1 rounded-bl-sm m-[3px]"
                :class="(w - 1 < rweeksPast) ? 'bg-gray-500' : 'bg-primary-500'">
              </div>
            </div>
          </UCard>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { differenceInCalendarWeeks } from "date-fns";
import { computed, ref, watch } from "vue";

const date = ref();

watch(date, (oldDate, newDate) => {
  localStorage.setItem('dob', (oldDate && oldDate.toString() || newDate && newDate.toString()))
})

var lifeExpectancy = 5000; // in weeks
const rweeksPast = computed(() => {
  return date.value && differenceInCalendarWeeks(new Date(), date.value) || 5000
})

onMounted(() => {
  console.log(date.value)
  date.value = localStorage.dob && new Date(Date.parse(localStorage.dob)) || null
})
</script>

