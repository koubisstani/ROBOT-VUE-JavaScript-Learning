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
      <h2>mouserenter</h2>
      <code-item>
        <template #code>addEventListener("mouserenter")</template>
        <template #item
          >Adding a mouse-in event to this element is equivalent to our hover
          effect in CSS. But if you need to do something while the mouse is
          moving over an element, you can use this event to listen
        </template>
      </code-item>
      <br />
      <h2>mousermove</h2>
      <code-item>
        <template #code>addEventListener("mousermove")</template>
        <template #item
          >Add a mouse movement event to this element. But if you need to do
          something while the mouse is moving, you can use this event listener
        </template>
      </code-item>
      <p>
        After using these two events, we usually need to use the event parameter
        inside, which can help us understand what event is now, what element is
        triggered, and where on the screen.
      </p>
      <br />
      <p>
        So we can use these methods to make a nice effect on the element
        following effect when the mouse moves
      </p>
      <br />
      <p>
        There's a simple little task in the back, so go ahead and give it a try
      </p>
      <p>
        Remember to print and view the event parameter event before using the
        event, if you need to use the event parameter of this event
      </p>
    </study-content>
    <my-footer week="4" num="2"></my-footer>
  </my-container>
</template>

<style lang="less"></style>
