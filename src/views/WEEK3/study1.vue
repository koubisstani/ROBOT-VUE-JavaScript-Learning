<script>
import MyFooter from '@/components/MyFooter.vue'
import MyTitle from '@/components/MyTitle.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
import mydemo from '@/components/demo.vue'
import demoCode from '@/components/demoCode.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem,
    'my-demo': mydemo,
    'demo-code': demoCode
  }
}
</script>

<script setup></script>

<template>
  <my-container>
    <my-title
      title1="learn to element move"
      title2="In this section, you'll learn how to make element move"
    ></my-title>
    <study-content>
      <h2>Dom move</h2>
      <p>Here, you'll learn how to control the movement of page elements</p>
      <code-item>
        <template #code
          >transform: translateY(value) translateX(value)</template
        >
        <template #item>
          Here, once we use this style property on the elements we want to move,
          we can control them to move on a two-dimensional plane
        </template>
      </code-item>
      <br />
      <h2>demo</h2>
      <img src="@/assets/week3/code.png" alt="" />
      <video
        src="@/assets/week3/translate.mp4"
        autoplay="true"
        controls="true"
      ></video>
    </study-content>
    <my-footer week="3" num="1"></my-footer>
  </my-container>
</template>

<style lang="less"></style>
