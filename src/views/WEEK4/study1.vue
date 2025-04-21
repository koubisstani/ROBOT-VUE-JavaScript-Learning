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
      <h2>Element: animate() method</h2>
      <p>
        The Element interface's animate() method is a shortcut method which
        creates a new Animation, applies it to the element, then plays the
        animation. It returns the created Animation object instance.
      </p>
      <code-item>
        <template #code> animate(keyframes, options) </template>
        <template #item
          >There are two parameters here, which we will introduce one by one
          below</template
        >
      </code-item>
      <code-item>
        <template #code>keyframes </template>
        <template #item
          >Either an array of keyframe objects, or a keyframe object whose
          properties are arrays of values to iterate over. See Keyframe Formats
          for more details.</template
        >
      </code-item>
      <code-item>
        <template #code>options </template>
        <template #item
          >Either an integer representing the animation's duration (in
          milliseconds), or an Object containing one or more timing properties
          described in the KeyframeEffect() options parameter and/or the
          following options:</template
        >
      </code-item>
      <ul>
        <li>
          <h3>id Optional</h3>
          <p>
            A property unique to animate(): A string with which to reference the
            animation.
          </p>
        </li>
        <li>
          <h3>rangeStart Optional</h3>
          <p>
            Specifies the start of an animation's attachment range along its
            timeline, i.e. where along the timeline an animation will start. The
            JavaScript equivalent of the CSS animation-range-start property.
            rangeStart can take the same value types as rangeEnd.
          </p>
        </li>
        <li>
          <h3>timeline Optional</h3>
          <p>
            A property unique to animate(): The AnimationTimeline to associate
            with the animation. Defaults to Document.timeline. The JavaScript
            equivalent of the CSS animation-timeline property.
          </p>
        </li>
      </ul>
      <my-demo>
        <template #code>
          <demo-code
            type="HTML"
            code='
<div class="newspaper">翻报纸真的<br />会头晕</div>             
'
          >
          </demo-code>
          <demo-code
            type="CSS"
            code="
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.newspaper {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}           
"
          >
          </demo-code>
          <demo-code
            type="js"
            code='
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});       
'
          >
          </demo-code>
        </template>
      </my-demo>
      <video
        src="@/assets/week4/newspaper.mp4"
        autoplay="true"
        controls="true"
      ></video>
    </study-content>
    <my-footer week="4" num="1"></my-footer>
  </my-container>
</template>

<style lang="less"></style>
