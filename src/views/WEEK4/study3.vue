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
      title1="3d effect"
      title2="In this section, you'll learn how to make 3d"
    ></my-title>
    <study-content>
      <p>
        In this section, you'll learn how to use 3D styles to create a 3D effect
      </p>
      <h2>Translate</h2>
      <code-item>
        <template #code>transform: translate3d(x, y, z)</template>
        <template #item
          >As with 2D translate, the argument can also pass px,
          percentage</template
        >
      </code-item>
      <h2>perspective</h2>
      <code-item>
        <template #code>perspective:1000px</template>
        <template #item
          >When using a 3D effect element, you need to add a style perspective
          to the parent element of the element, so that the child element with
          the 3D effect set will have the 3D effect</template
        >
      </code-item>
      <h2>rotateZ</h2>
      <code-item>
        <template #code>rotateZ(360deg)</template>
        <template #item
          >Let this element rotate clockwise around the z-axis, This rotation is
          equivalent to a two-dimensional rotation</template
        >
      </code-item>
      <h2>rotateX, rotateY</h2>
      <code-item>
        <template #code>rotateX(360deg)</template>
        <template #item
          >Let this element rotate clockwise around the x-axis</template
        >
      </code-item>
      <p>
        Here, there are some caveats that are a little different from the
        rotation of the Z axis because it rotates around the X and Y axes. So,
        here's a left-hand rule that can help you quickly identify where you
        will rotate when the value of rotatex is positive
      </p>
      <img src="@/assets/week4/zoushou.png" alt="" />
      <br />
      <h2>transform-style</h2>
      <code-item>
        <template #code>transform-style: preserve-3d</template>
        <template #item>
          <ul>
            <li>
              The transform property needs to be added to the parent element,
              and after adding it to the parent element, the parent element
              becomes a square box with a three-dimensional effect
            </li>
            <li>Add positioning to child elements</li>
            <li>Adjust the position, displacement or rotation of the box</li>
          </ul>
        </template>
      </code-item>
      <div>
        <img src="@/assets/week4/html.png" alt="" />
      </div>
      <div>
        <img src="@/assets/week4/css.png" alt="" />
      </div>

      <h2>demo</h2>
      <video src="@/assets/week4/effect.mp4" autoplay controls></video>
    </study-content>
    <my-footer week="4" num="3"></my-footer>
  </my-container>
</template>

<style lang="less"></style>
