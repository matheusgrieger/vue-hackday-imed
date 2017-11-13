<template>
  <div id="app">
    <transition name="view">
      <router-view/>
    </transition>
    <div class="controls">
      <router-link :to="{ name: prevSlide }" v-if="prevSlide">voltar</router-link>
      <router-link :to="{ name: nextSlide }" v-if="nextSlide">avançar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      changingSlide: false
    }
  },

  computed: {
    prevSlide () {
      return this.$route.meta.prevSlide
    },

    nextSlide () {
      return this.$route.meta.nextSlide
    }
  },

  methods: {
    changeSlide (event) {
      if (!this.changingSlide) {
        if (event.keyCode === 37 && this.prevSlide) {
          return this.$router.push({ name: this.prevSlide })
        }
        if (event.keyCode === 39 && this.nextSlide) {
          this.$router.push({ name: this.nextSlide })
        }
      }
    }
  },

  beforeRouteUpdate () {
    this.changingSlide = true
  },

  created () {
    window.addEventListener('keydown', this.changeSlide)
    this.$router.afterEach(() => {
      this.changingSlide = false
    })
  },

  beforeDestroy () {
    window.removeEventListener('keydown', this.changeSlide)
  }
}
</script>
