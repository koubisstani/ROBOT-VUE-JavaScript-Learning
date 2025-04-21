<script setup>
const props = defineProps({
  type: String,
  code: String
})
</script>

<template>
  <div>
    <p style="color: red">{{ type }}</p>
    <div class="example_code">
      <pre>
        {{ code }}
        </pre
      >
    </div>
  </div>
</template>

<style></style>
