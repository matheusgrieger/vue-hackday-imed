<template>
  <div class="slide advantages">
    <div class="left">
      <h1>Vantagens</h1>
      <ul>
        <li>
          <strong>Leve</strong> <br>
          Tamanho e benchmarks
        </li>
        <li>
          <strong>Progressivo</strong> <br>
          Biblioteca ou Framework
        </li>
        <li>
          <strong>Simples</strong> <br>
          Sem sintaxes específicas
        </li>
        <li>
          <strong>Modularizado</strong> <br>
          Funciona 100% com componentes
        </li>
        <li>
          <strong>JavaScript</strong> <br>
          Sem dependências, JavaScript puro
        </li>
        <li>
          <strong>Documentação</strong> <br>
          Completa, clara e traduzida
        </li>
      </ul>
    </div>
    <div class="right" v-if="state > 1">
      <h1>Desvantagens</h1>
      <ul>
        <li>
          <strong class="bad">Básico</strong> <br>
          Dependências externas
        </li>
        <li>
          <strong class="bad">Comunidade pequena</strong> <br>
          Não tão abrangente quanto Angular ou React
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import arrowDownState from '../mixins/arrowDownState'

export default {
  name: 'Advantages',

  mixins: [arrowDownState]
}
</script>

