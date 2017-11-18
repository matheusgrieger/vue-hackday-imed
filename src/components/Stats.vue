<template>
  <div class="slide stats">
    <h1>Estatísticas</h1>
    <ul>
      <li>
        Vue é o framework de maior crescimento atualmente <br>
        <strong>74 mil</strong> estrelas no Github (81 mil React, 30 mil Angular, 57 mil AngularJS)
      </li>
      <li v-if="state > 1">
        <strong>96%</strong> dos desenvolvedores usaria novamente, contra 89% de 2016<br>
        Fonte: <em>State of Vue.js by Monterail</em>
        Fonte: <em>State of JavaScript 2016</em>
      </li>
      <li v-if="state > 2">
        <strong>81%</strong> considera a baixa curva de aprendizagem <br>
        e <strong>60%</strong> a documentação como as melhores partes do Vue
      </li>
      <li v-if="state > 3">
        As maiores linguagens de Back-End que acompanham Vue são <br>
        <strong>PHP</strong> (53%) e <strong>NodeJS</strong> (45%)
      </li>
      <li v-if="state > 4">
        Suporte até <strong>IE9</strong> e sem <em>breaking changes</em> na API <br>
        desde o lançamento da versão <strong>2.0</strong> (2016)
      </li>
    </ul>
  </div>
</template>

<script>
import arrowDownState from '../mixins/arrowDownState'

export default {
  name: 'Stats',

  mixins: [arrowDownState]
}
</script>

