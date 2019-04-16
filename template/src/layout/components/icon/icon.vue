<template>
  <span class="icon">
    <i :class="iconClass"></i>
  </span>
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
  }
}
</script>

<style scoped>
/* .icon {
} */
</style>
