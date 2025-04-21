<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  week: String,
  num: String
})
const toTask = () => {
  router.push({
    name: `w${props.week}_task${props.num}`
  })
}
</script>

<template>
  <footer>
    <p>
      Great, you've done what you're learning for today, so do some tasks to
      test yourself!
      <el-button type="primary" @click="toTask" style="margin-left: 20px">
        TASK
      </el-button>
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 100px;
  text-align: center;
  p {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
