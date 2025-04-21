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
      title1="learn to rotate"
      title2="In this section, you'll learn how to make element rotate some angle"
    ></my-title>
    <study-content>
      <h2>Rotate</h2>
      <p>
        Do you know how the clock turns, it's controlled by the same CSS style?
        We can set the shape of the CSS transform by controlling its shape
        property, so that the image will be rotated
      </p>
      <code-item>
        <template #code>element.style.transform="rotate(30deg)"</template>
        <template #item
          >In rotate, you need to use deg as a unit, 1deg means 1 degree
          clockwise, and -1 means 1 degree counterclockwise. When this property
          is used, the element will be rotated 45 degrees clockwise, and if no
          rotation center is specified, it will rotate around the center of the
          image element by default.</template
        >
      </code-item>
      <h2>transformOrigin</h2>
      <code-item>
        <template #code>element.style.transformOrigin="center bottom"</template>
        <template #item
          >We can use transfromOrigin to change the origin of the rotation
          (center point), which will cause the image to be selected according to
          the center point we have selected, instead of the default center
          point.</template
        >
      </code-item>
      <p>
        Of course, the way to choose the center point is not only the way to
        choose a noun like center bottom, but also the way to use pixels and
        percentages. However, the noun of direction is more commonly used
      </p>
    </study-content>
    <my-footer week="3" num="2"></my-footer>
  </my-container>
</template>

<style lang="less"></style>
