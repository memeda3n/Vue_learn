<template>
  <div class="msg">{{message}}</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "this is a .vue"
    };
  }
};
</script>

<style>
.msg {
  font-weight: 100;
  font-size: 50px;
  float: right;
}
</style>