<template>
  <h1>App Counter</h1>
  <CounterValue v-for="obj in [{ index: 1, text: 'Clicked' }]" :title="obj.text" :value="counter" :key="obj.index" />

  <button v-on:click="onPlus">+</button>
  <button v-if="canRenderMinusButton" @click="onMinus">-</button>
</template>
<script>
import CounterValue from './components/CounterValue.vue';

export default {
  components: {
    CounterValue,
  },
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    canRenderMinusButton() {
      return this.counter > 0;
    },
  },
  methods: {
    onPlus() {
      this.counter++;
      console.log('> Counter -> onPlus:', this.counter, event, input);
    },
    onMinus() {
      this.counter--;
      console.log('> Counter -> onMinus:', this.counter);
    },
  },
  components: { CounterValue },
};
</script>
<style scoped>
p.counter-value {
  color: red;
  font-size: 2rem;
  font-weight: normal;
}
</style>
