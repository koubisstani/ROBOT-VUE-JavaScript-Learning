<script setup>
const props = defineProps({
  imgUR: String,
  demoName: String
})
// console.log(typeof props.imgUR)
// console.log(props.imgUR)
</script>

<template>
  <div>
    <h2>demo</h2>
    <br />
    <h4>{{ demoName }}</h4>
    <p>
      For example, the code for {{ demoName }} would look something like this:
    </p>
    <slot name="code"></slot>

    <br />
    <img :src="imgUR" alt="" />
  </div>
</template>

<style></style>
