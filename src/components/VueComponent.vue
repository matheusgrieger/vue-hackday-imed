<template>
  <button v-on:click="click">Contar!</button>
</template>

<script>
export default {
  name: 'VueComponent',

  props: ['value'],

  methods: {
    click () {
      this.$emit('input', Number(this.value) + 1)
    }
  }
}
</script>
