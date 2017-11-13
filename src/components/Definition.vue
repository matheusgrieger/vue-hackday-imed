<template>
  <div class="slide definition">
    <h1>Definição</h1>
    <div class="lists">
      <div class="vue">
        <img src="../assets/logo.png">
        <ul>
          <li>Open-source</li>
          <li>Framework Reativo</li>
          <li>Construir Interfaces</li>
          <li>Templates</li>
          <li>Framework ou Biblioteca</li>
          <li v-if="state > 2">
            <strong>30kb</strong> <br>
            Vue + Vue Router + Vuex
          </li>
        </ul>
      </div>
      <div class="angular" v-if="state > 1">
        <img src="../assets/angularjs.svg">
        <ul>
          <li>Open-source</li>
          <li>Framework Reativo</li>
          <li>Construir Interfaces</li>
          <li>Templates</li>
          <li>Framework ou Biblioteca</li>
          <li v-if="state > 2">
            <strong class="bad">144kb</strong> (AngularJS) <br>
            <strong class="bad">130kb</strong> (Angular 2+)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Definition',

  data () {
    return {
      state: 1
    }
  },

  methods: {
    nextState (event) {
      if (event.keyCode === 40) {
        this.state++
      }
    }
  },

  created () {
    window.addEventListener('keydown', this.nextState)
  },

  beforeDestroy () {
    window.removeEventListener('keydown', this.nextState)
  }
}
</script>

