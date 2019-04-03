<template>
  <div class="login"></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  methods: {}
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login-bg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}
</style>
