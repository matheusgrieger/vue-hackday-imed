export default {
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
