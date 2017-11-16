<template>
  <div class="slide sample-app">
    <h1>Exemplo de aplicação</h1>
    <div class="app-demo">
      <input type="text" v-model="msg">
      Você digitou: {{ msg }}
    </div>
    <pre v-highlightjs="sourceCode" class="code" v-if="state > 1">
      <code class="html"></code>
    </pre>
  </div>
</template>

<script>
import arrowDownState from '../mixins/arrowDownState'

export default {
  name: 'SampleApp',

  data () {
    return {
      sourceCode: `<div id="app">
  <input type="text" v-model="msg">
  Você digitou: {{ msg }}
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      msg: 'Welcome Hackday!'
    }
  })
<\/script>`,
      msg: 'Welcome Hackday!'
    }
  },

  mixins: [arrowDownState]
}
</script>

