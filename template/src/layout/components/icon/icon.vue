<template>
  <i :class="iconClass"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `${this.iconClass}`
    }
  },
  methods: {

  }
}
</script>

<style scoped>
/* .icon {
} */
</style>
