<template>
  <div class="slide sample-component">
    <h1>Exemplo de Componente</h1>
    <div class="app-demo">
      Componente pai
      <InputComponent></InputComponent>
    </div>
    <pre v-highlightjs="sourceCode" class="code">
      <code class="html"></code>
    </pre>
  </div>
</template>

<script>
var InputComponent = {
  data () {
    return {
      msg: 'Welcome Hackday!'
    }
  },
  template: `<div>
  <input type="text" v-model="msg">
  Você digitou: {{ msg }}
</div>`
};

export default {
  name: 'SampleComponent',

  data () {
    return {
      sourceCode: `<div id="app">
  Componente pai
  <InputComponent></InputComponent>
</div>

<script>
  var InputComponent = {
    data: function() {
      return {
        msg: 'Welcome Hackday!'
      }
    },
    template: \`
      <div>
        <input type="text" v-model="msg">
        Você digitou: {{ msg }}
      </div>
    \`
  };

  new Vue({
    el: '#app',
    components: {
      InputComponent: InputComponent
    }
  });

  Vue.component('InputComponent', InputComponent);
<\/script>`
    }
  },

  components: {
    InputComponent
  }
}
</script>
