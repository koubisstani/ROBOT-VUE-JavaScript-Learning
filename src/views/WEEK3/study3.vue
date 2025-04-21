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
      title1="learn to JavaScript animations"
      title2="In this section, you'll learn how to use javascript animate"
    ></my-title>
    <study-content>
      <p>
        The knowledge point in this section is the combination of translate in
        transform and rotate, which has already been discussed in the previous
        two sections, so I will not repeat it. Please proceed directly to the
        task
      </p>
    </study-content>
    <my-footer week="3" num="3"></my-footer>
  </my-container>
</template>

<style lang="less"></style>
