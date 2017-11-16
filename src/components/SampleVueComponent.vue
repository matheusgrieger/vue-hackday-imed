<template>
  <div class="slide sample-vue-component">
    <h1>Componente .vue</h1>
    <p>Também conhecido como <strong>Single-file Component</strong></p>
    <div class="app-demo">
      <div>Contagem: {{ counts }}</div>
      <VueComponent v-bind:value="counts" v-on:input="count"></VueComponent>
    </div>
  </div>
</template>

<script>
import VueComponent from './VueComponent'

export default {
  name: 'SampleVueComponent',

  data () {
    return {
      counts: 0
    }
  },

  methods: {
    count (value) {
      this.counts = value
    }
  },

  components: {
    VueComponent: VueComponent
  }
}
</script>

