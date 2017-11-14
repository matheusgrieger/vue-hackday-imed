<template>
  <div class="slide sizes">
    <h1>Comparativo de tamanhos</h1>
    <p>De acordo com <a href="https://bundlephobia.com/" target="_blank">BundlePhobia</a> (minified)</p>

    <ul class="libraries">
      <li>
        <img src="../assets/angularjs.svg">
        <ul>
          <li>
            Sozinho: <br>
            <strong class="bad">172.2kb</strong>
          </li>
          <li>
            Conjunto básico (core + router): <br>
            <strong class="bad">176.4kb</strong>
          </li>
        </ul>
      </li>
      <li v-if="state > 1">
        <img src="../assets/angular.png">
        <ul>
          <li>
            Sozinho: <br>
            <strong class="bad">118.9kb</strong>
          </li>
          <li>
            Conjunto básico (core + common + router): <br>
            <strong class="bad">249.1kb</strong>
          </li>
        </ul>
      </li>
      <li v-if="state > 2">
        <img src="../assets/react.png">
        <ul>
          <li>
            Sozinho: <br>
            <strong>5kb</strong>
          </li>
          <li>
            Conjunto básico (core + DOM + router + Redux): <br>
            <strong class="bad">134.6kb</strong>
          </li>
        </ul>
      </li>
      <li v-if="state > 3">
        <img src="../assets/logo.png">
        <ul>
          <li>
            Sozinho: <br>
            <strong class="bad">59.5kb</strong>
          </li>
          <li>
            Conjunto básico (core + router + Vuex): <br>
            <strong>93kb</strong>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import arrowDownState from '../mixins/arrowDownState'

export default {
  name: 'Sizes',

  mixins: [arrowDownState]
}
</script>

