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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import arrowDownState from '../mixins/arrowDownState'

export default {
  name: 'Definition',

  mixins: [arrowDownState]
}
</script>

