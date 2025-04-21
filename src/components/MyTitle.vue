<script setup>
const props = defineProps({
  title1: String,
  title2: String
})
// console.log(props)
</script>

<template>
  <div class="header">
    <h1>{{ title1 }}</h1>
    <h2>{{ title2 }}</h2>
    <hr />
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 50px;
  h1 {
    color: red;
  }
  h2 {
    color: black;
  }
}
</style>
