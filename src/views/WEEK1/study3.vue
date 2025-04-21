<script>
import MyFooter from '@/components/MyFooter.vue'
import MyTitle from '@/components/MyTitle.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem
  }
}
</script>

<script setup></script>

<template>
  <my-container>
    <my-title
      title1="ball bounce"
      title2="Let the ball move 45 degrees to the frame and bounce"
    ></my-title>
    <study-content>
      <h2>position</h2>
      <p>
        The position CSS property sets how an element is positioned in a
        document. The top, right, bottom, and left properties determine the
        final location of positioned elements.
      </p>
      <code-item>
        <template #code>postion:relative</template>
        <template #item>Relative positioning</template>
      </code-item>
      <code-item>
        <template #code>position:absolute; </template>
        <template #item>absolute positioning</template>
      </code-item>
      <p>
        We typically use the parent postion:relative and the child
        position:absolute; to modify the child's top and bottom, right, left and
        other position styles to control the relative position of the child
        element in the parent element, so as to achieve an effect of moving the
        element
      </p>
      <p>
        In this section, we will introduce a Javascipt animation property,
        Transform, which allows you to control the movement of this element.
      </p>
      <h2>translate</h2>
      <code-item>
        <template #code>ball.style.transform="translate(150px,100px)"</template>
        <template #item>
          There is a translate attribute in this transform, and when using this
          property, you need to pass in two parameters, one is the x-axis and
          the other is the y-axis parameter, indicating how far this element
          will move to the x-axis and y-axis, note that these two parameters
          need to be followed by px, otherwise they will not take
          effect</template
        >
      </code-item>
      <br /><br />
      <p>
        You can also add an event to this element by clicking on it to make it
        call the executed js function to modify its movement
      </p>
      <code-item>
        <template #code>ball.style.transtion="all 1s"</template>
        <template #item>
          Transition is a special CSS style, but it can also be called via
          element.style.transiton, which is an excessive style property that
          allows the style of the element to have a gradient transition and
          movement process when it changes. This is the basis of
          animation</template
        >
      </code-item>
    </study-content>
    <my-footer week="1" num="3"></my-footer>
  </my-container>
</template>

<style lang="less" scoped></style>
